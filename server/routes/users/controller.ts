import { User } from './../../src/entity/user';
import { RAthenaConnection, WebConnection } from './../../classes/connection';
import { Crypto } from '../../classes/crypto';
import { Login } from '../../src/entity/login';
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
        let user: User = new User();
        user.email = req.body.email;
        user.username = req.body.username;
        let password = req.body.password;
        
        user.salt = Crypto.generateSalt(16);
        user.password = Crypto.generatePassword(password, user.salt);
        webConnection.manager.save(user)
            .then(newUser => {
                
                let login: Login = new Login();
                login.userid = newUser.username;
                login.user_pass = password;
                login.email = user.email;
                login.group_id = 0;
                login.state = 0;
                login.unban_time = 0;
                login.expiration_time = 0;
                login.logincount = 0;
                login.lastlogin = moment().format('YYYY-MM-DD HH:mm:ss');
                login.last_ip = '';
                login.birthdate = user.dob;
                login.character_slots = 0;
                login.pincode = '';
                login.pincode_change = 0;
                login.vip_time = 0;
                login.old_group = 0;
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
        console.log(req.user);
        res.status(200).json(req.user);
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