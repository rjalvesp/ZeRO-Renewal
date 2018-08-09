import { ServerInfo } from './../../src/entity/server-info';
import { Characters } from "../../classes/characters";
import { RAthenaConnection } from '../../classes/connection';
var moment = require('moment');
export class CharactersController {
    static online(req: any, res: any) {
        Characters.usersOnline()
            .then((value: number)=>{ res.status(200).json(value); })
            .catch((err: any)=>{ res.status(200).json(0); });
    }
    static async info(req: any, res: any) {
        let connection = await RAthenaConnection;
        connection.getRepository(ServerInfo)
            .createQueryBuilder('serverInfo')
            .getOne()
            .then((value: any)=>{ res.status(200).json(value? value : {}); })
            .catch((err: any)=>{ res.status(400).json(err); });
    }
    
    static timezone(req: any, res: any){
        res.status(200).json(moment().zone());
    }
}