
import { DBConnections } from './../../classes/connection';
import { User } from "../../src/entity/user";
import { Crypto } from "../../classes/crypto";
import { Token } from '../../src/entity/token';

var moment = require('moment');
var _ = require('lodash');
export class AuthorizationController {
    static async login(req: any, res: any){
         
        let webConnection = await DBConnections.WebConnection;
        let username: string = req.body.username;
        let password = req.body.password;
        webConnection.createQueryBuilder()
            .select("user")
            .from(User, "user")
            .where("user.username = :username", { username: username })
            .getOne()
            .then((value: any)=>{
                if (!(<User>value).validate(password))
                    res.status(400).json({message: 'Incorrect Password'});
                let token = new Token();
                token.expires_in = 60;
                token.token = Crypto.generateToken();
                token.refresh_token = Crypto.generateToken();
                token.id_user = value.id;
                token.created_at = moment().format();
                webConnection.manager.save(token)
                    .then((newToken: Token) => {
                        res.status(201).json(newToken? newToken : {});
                    })
                    .catch((error: any)=>{
                        res.status(500).json(error);
                    });
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            });
    }
    static logout = (req: any, res: any)=> {
        // (req.user as User).deleteTokens()
        // .then(()=>{ return res.status(204).send(); })
        // .catch((err)=>{ return res.status(500).json(err); });
    }
    static refresh = (req: any, res: any)=> {
        // TokensCollection.all({ selector : { bearer : req.body.bearer } } )
        // .then((response)=>{
        //     if (response.length === 0)  return res.status(400).json({error: 'Invalid token', status: 400});
        //     let user : User = <User>req.user;
        //     user.deleteTokens()
        //     .then(()=>{  
        //         let token = new Token({}, user.json._id);
        //         token.save()
        //         .then(()=>{ res.status(200).json(token.json); })
        //         .catch((err)=>{ res.status(500).json(err); });
        //     })
        //     .catch((err)=>{ return res.status(500).json(err); });    
        // })
        // .catch((err)=>{ return res.status(500).json(err); });    
        
    }
    
}