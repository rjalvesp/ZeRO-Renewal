import { Login } from './../../src/entity/login';
import { User } from './../../src/entity/user';
import { RAthenaConnection, WebConnection } from './../../classes/connection';
import { Crypto } from '../../classes/crypto';
import { Character } from '../../src/entity/character';
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
        
        let rathenaConnection = await RAthenaConnection;
        let webConnection = await WebConnection;
        console.log('1111111111111')
        let user: User = new User();
        user.email = req.body.email;
        user.username = req.body.username;
        let password = req.body.password;
        
        user.salt = Crypto.generateSalt(16);
        user.password = Crypto.generatePassword(password, user.salt);
        console.log('--------')
        webConnection.manager.save(user)
        .then(newUser => {
            
            console.log('+++++++++++')
                let login: Login = new Login();

                login.userid = newUser.username;
                login.user_pass = password;
                login.email = user.email;
                login.sex = 'M';
                login.group_id = 0;
                login.lastlogin = moment().format('YYYY-MM-DD');
                login.birthdate = moment().format('YYYY-MM-DD');
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
        let connection = await RAthenaConnection;
        console.log('----------')
        connection.createQueryBuilder()
        .select("login")
        .from(Login, "login")
        .where("login.email = :email", { email: req.user.email })
        .getOne()
        .then(async (value: any)=>{
            console.log('+++++++++++')
            let login : Login = <Login>value;
            
                let charRepository = await connection.getRepository(Character);
                let characters = await charRepository.find({account_id: login.account_id});
                res.status(200).json({...req.user, ...{characters: characters}});
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            });
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