import { DBConnections } from './../../classes/connection';
import { ServerInfo } from './../../src/entity/server-info';
import { Characters } from "../../classes/characters";
var moment = require('moment');
export class CharactersController {
    static online(req: any, res: any) {
        Characters.usersOnline()
            .then((value: number)=>{ res.status(200).json(value); })
            .catch((err: any)=>{ res.status(200).json(0); });
    }
    static info(req: any, res: any) {
        DBConnections.RAthenaConnection
            .then((connection)=>{
                let serverInfoRespository = connection.getRepository(ServerInfo);
                serverInfoRespository.findOne()
                    .then((value: any)=>{ res.status(200).json(value? value : {}); })
                    .catch((err: any)=>{ res.status(400).json(err); });
            })
            .catch((err)=>{
                res.status(500).json(err);
            });
    }
    
    static timezone(req: any, res: any){
        res.status(200).json(moment().utcOffset());
    }
}