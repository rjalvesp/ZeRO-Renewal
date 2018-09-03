import { GuildMember } from './../../src/entity/guild-member';
import { RecoverPassword } from './../../src/entity/recover-password';
import { Login } from './../../src/entity/login';
import { User } from './../../src/entity/user';
import { Crypto } from '../../classes/crypto';
import { Character } from '../../src/entity/character';
import { DBConnections } from '../../classes/connection';
import { Guild } from '../../src/entity/guild';
var _ = require('lodash');
var moment = require('moment');
export class UsersController {
    // static index = (req: any, res: any)=> {
    //     UsersCollection.all({})
    //     .then((response: any)=>{
    //         var response = _.map(response, 'json');
    //         res.status(200).json(response);
    //     })
    //     .catch((err)=>{return res.status(500).json(err);});
    // }
    // static datatables = (req: any, res: any)=> {
    //     UsersCollection.all({})
    //     .then((response: any)=>{
    //         let result = {
    //             recordsTotal: response.length,
    //             recordsFiltered: response.length,
    //             data: _.orderBy(_.map(response, 'json'), ['name'], ['asc'])
    //         }
    //         res.status(200).json(result);
    //     })
    //     .catch((err)=>{return res.status(500).json(err);});
    // }
    // static get = (req: any, res: any)=> {
    //     UsersCollection.get(req.params.id)
    //     .then((response: any)=>{
    //         res.status(200).json(_.omit(response.json, ['_rev', 'salt', 'password', 'type']));
    //     })
    //     .catch(()=>{});
    // }
    static async add(req: any, res: any){
        
        let rathenaConnection = await DBConnections.RAthenaConnection;
        let webConnection = await DBConnections.WebConnection;
        let user: User = new User();
        user.email = req.body.email;
        user.username = req.body.username;
        let password = req.body.password;
        user.dob = req.body.dob;
        user.salt = Crypto.generateSalt(16);
        user.password = Crypto.generatePassword(password, user.salt);
        webConnection.manager.save(user)
        .then((newUser: User) => {
                let login: Login = new Login();
                login.userid = newUser.username;
                login.user_pass = password;
                login.email = user.email;
                login.sex = 'M';
                login.group_id = 0;
                login.lastlogin = moment().format('YYYY-MM-DD');
                login.birthdate = req.body.dob;
                rathenaConnection.manager.save(login)
                    .then((newLogin: Login)=>{
                        res.status(201).json(newLogin? newUser : {});
                    })
                    .catch((error: any)=>{
                        res.status(500).json(error);
                    });
            })
            .catch((error: any) => {
                res.status(500).json(error);
            });
    }
    static async me(req: any, res: any){
        let connection = await DBConnections.RAthenaConnection;
        connection.createQueryBuilder()
        .select("login")
        .from(Login, "login")
        .where("login.email = :email", { email: req.user.email })
        .getOne()
        .then(async (value: any)=>{
            let login : Login = <Login>value;
            
                let charRepository = await connection.getRepository(Character);
                let characters = await charRepository.find({account_id: login.account_id});

                let guildMembers = await connection.createQueryBuilder()
                    .from(GuildMember, "guild_member")
                    .where("guild_member.char_id in (:id)", 
                        { 
                            id: characters.length > 0? characters.map((char: any)=>{ return char.char_id }) : 0
                        }
                    )
                    .getMany();
                let guilds = await connection.createQueryBuilder()
                    .from(Guild, "guild")
                    .where("guild.guild_id in (:id)", 
                        { 
                            id: guildMembers.length > 0? _.uniq(guildMembers.map((guildMember: any)=>{ return guildMember.guild_id }) ) : 0
                        }
                    )
                    .getMany()
                guildMembers.forEach((guildMember: any)=>{
                    guildMember.guild = guilds.find((guild: Guild)=>{ return guild.guild_id === guildMember.guild_id; });
                })
                characters.forEach((char: any)=>{
                    let guildMember = guildMembers.find((guildMember: any)=>{
                        guildMember.char_id === char.char_id
                    });
                    char.guild = guildMember? guildMember.guild : null;
                })
                res.status(200).json({...req.user, ...{characters: characters}});
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            });
    }
    static async forgot(req: any, res: any){
        let connection = await DBConnections.WebConnection;
        connection.createQueryBuilder()
        .select("user")
        .from(User, "user")
        .where("user.email = :text or user.username = :text", { text: req.body.username })
        .getOne()
        .then(async (value: any)=>{
            if (!value) return res.status(404).json({ok: false});
            let recoverPassword = new RecoverPassword();
            recoverPassword.id_user = value.id;
            recoverPassword.consumed = false;
            recoverPassword.datetime = moment().format();
            recoverPassword.encoded = Crypto.generatePassword(recoverPassword.datetime, Crypto.generateSalt(16));
            connection.manager.save(recoverPassword)
                .then((newUser: User) => { res.status(200).json({ok: true}); })
                .catch((error: any)=>{ res.status(500).json(error); });
        })
        .catch((error: any)=>{ res.status(500).json(error); });
    }
    static async newPassword(req: any, res: any){
        let connection = await DBConnections.WebConnection;
        let recoverPassword = await connection.createQueryBuilder()
            .select("recover_passwords")
            .from(RecoverPassword, "recover_passwords")
            .where("recover_passwords.encoded = :text", { text: req.body.encoded })
            .getOne();
        if (!recoverPassword) return res.status(404).json({ok: false});
        let thatMoment = moment(recoverPassword.datetime);
        let thisMoment = moment();
        recoverPassword.consumed = true;
        await connection.manager.save(recoverPassword);
        if (thisMoment.subtract(1, 'd').isAfter(thatMoment)) return res.status(409).json({ok: false, reason: 'Request expired'});
        let user : User = await connection.createQueryBuilder()
            .select("user")
            .from(User, "user")
            .where("user.id = :id", { id: recoverPassword.id_user })
            .getOne();
        let password = req.body.password;
        user.salt = Crypto.generateSalt(16);
        user.password = Crypto.generatePassword(password, user.salt);
        await connection.manager.save(user);
        let rathenaConnection = await DBConnections.RAthenaConnection;
        let login : Login = await rathenaConnection.createQueryBuilder()
            .select("login")
            .from(Login, "login")
            .where("login.email = :email", { email: user.email })
            .getOne()
        login.user_pass = password;
        await rathenaConnection.manager.save(login);
        res.status(200).json({ok: true}); 
    }
    // static delete = (req: any, res: any)=> {
        
    //     UsersCollection.get(req.params.id)
    //     .then((response: any)=>{
    //         response.delete()
    //         .then((response: any)=>{
    //             res.status(204).send();
    //         })
    //         .catch((err: any)=>{return res.status(500).json(err);});
    //     })
    //     .catch((err)=>{return res.status(500).json(err);});
    // }
}