import { GuildMember } from './../../src/entity/guild-member';
import { GuildCastle } from './../../src/entity/guild-castle';
import { Guild } from './../../src/entity/guild';

import { DBConnections } from '../../classes/connection';
const _ = require('lodash');
export class GuildsController {
    static async index(req: any, res: any){
        let RAthenaConnection = await DBConnections.RAthenaConnection;
        RAthenaConnection.createQueryBuilder()
            .select("row")
            .from(Guild, "row")
            .getMany()
            .then((result: Array<any>)=>{
                res.status(200).json(result);
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            })
    }
    static async datatables(req: any, res: any){
        let RAthenaConnection = await DBConnections.RAthenaConnection;
        let guilds = await RAthenaConnection.createQueryBuilder()
            .select("row")
            .from(Guild, "row")
            .take(req.body.lenght)
            .skip(req.body.start)
            .orderBy("row.exp", "DESC")
            .getMany();
        let count = await RAthenaConnection.getRepository(Guild)
            .createQueryBuilder('item')
            .select('COUNT(*)', "count")
            .getRawOne();
        let castles = await RAthenaConnection.createQueryBuilder()
            .select("row")
            .from(GuildCastle, "row")
            .getMany();
        castles.forEach((castle : GuildCastle)=>{
            guilds.find((guild: any)=>{
                if (!guild.castles) guild.castles = [];
                if (castle.guild_id !== guild.guild_id) return false;
                guild.castles.push(castle);
                return true;
            })
        });
        res.status(200).json({
            recordsTotal: parseInt(_.get(count, 'count', 0).toString()),
            recordsFiltered: guilds.length,
            data: guilds,
        });
    }
    static async get(req: any, res: any){
        let RAthenaConnection = await DBConnections.RAthenaConnection;
        let guild = await RAthenaConnection.createQueryBuilder()
            .select("row")
            .from(Guild, "row")
            .where('row.guild_id = :id', { id: req.params.id})
            .getOne();
        let castles = await RAthenaConnection.createQueryBuilder()
            .select("row")
            .from(GuildCastle, "row")
            .where('row.guild_id = :id', { id: req.params.id})
            .getMany();
        let members = await RAthenaConnection.createQueryBuilder()
            .select("row")
            .from(GuildMember, "row")
            .where('row.guild_id = :id', { id: req.params.id})
            .getMany();
        guild.castles = castles;
        guild.members = members;
        res.status(200).json(guild? guild : {});
            
    }
    static async add(req: any, res: any){
        let RAthenaConnection = await DBConnections.RAthenaConnection;
        let item = new Guild();
        // item.id_category = req.body.id_category;
        // item.question = req.body.question;
        // item.answer = req.body.answer;
        RAthenaConnection.manager.save(item)
            .then((newItem: any) => {
                res.status(201).json(newItem? newItem : {});
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            });
    }
    static async edit(req: any, res: any){
        
        let RAthenaConnection = await DBConnections.RAthenaConnection;
        RAthenaConnection.createQueryBuilder()
            .select("row")
            .from(Guild, "row")
            .where('row.id = :id', { id: req.params.id})
            .getOne()
            .then((item: any) => {
                // item.id_category = req.body.id_category;
                // item.question = req.body.question;
                // item.answer = req.body.answer;
                RAthenaConnection.manager.save(item)
                    .then((newItem: any) => {
                        res.status(201).json(newItem? newItem : {});
                    })
                    .catch((error: any)=>{
                        res.status(500).json(error);
                    });
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            });
    }
    static async delete(req: any, res: any){
        
        let RAthenaConnection = await DBConnections.RAthenaConnection;
        RAthenaConnection.createQueryBuilder()
            .delete()
            .from(Guild)
            .where('id = :id', { id: req.params.id})
            .execute()
            .then((newItem: any) => {
                res.status(207).json(newItem? newItem : {});
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            });
    }
}