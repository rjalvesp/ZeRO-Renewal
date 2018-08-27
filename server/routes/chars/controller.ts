import { GuildMember } from './../../src/entity/guild-member';
import { VendingItem } from './../../src/entity/vending-item';
import { Vending } from './../../src/entity/vending';
import { GuildCastle } from './../../src/entity/guild-castle';
import { Guild } from './../../src/entity/guild';
import { Character } from './../../src/entity/character';
import { Faq } from './../../src/entity/faq';
import { DBConnections } from '../../classes/connection';
import { JobClassCollection } from '../../classes/class-collection';
import { JobClass } from '../../classes/class';
import { JobClassTotal } from '../../classes/class-total';
import { Characters } from '../../classes/characters';
import { Login } from '../../src/entity/login';
const _ = require('lodash');
export class CharsController {
    static async classes(req: any, res: any){
        let connection = await DBConnections.RAthenaConnection;
        connection.createQueryBuilder()
            .select("char.class", 'class')
            .addSelect("COUNT(char.class)", "total")
            .from("char")
            .groupBy('char.class')
            .execute()
            .then((result: Array<any>)=>{
                let collection = JobClassCollection.items;
                let dtResult : any = {
                    recordsTotal: collection.length,
                    recordsFiltered: collection.length,
                    data: [],
                };
                console.log(result);
                JobClassCollection.items.forEach((item: JobClass)=>{
                    let totalItem = result.find((row: any)=>{ return row.class === item.id });
                    dtResult.data.push(new JobClassTotal(item, !totalItem? 0 : parseInt(totalItem.total.toString(), 10)));
                })
                dtResult.data = _.orderBy(dtResult.data, ['total', 'name'], ['desc', 'asc']);
                res.status(200).json(dtResult);
            })
            .catch((error: any)=>{
                console.log(error);
                res.status(500).json(error);
            })
    }
    
    static async class(req: any, res: any){
        let connection = await DBConnections.RAthenaConnection;
        let query =  connection.createQueryBuilder().select("row").from(Character, "row");
        if (req.params.class > -1) query = query.where('row.class = :id', {id: req.params.class})
        query.take(req.body.lenght).skip(req.body.start).getMany()
        .then((result: Array<any>)=>{
            query = connection.getRepository(Character).createQueryBuilder('row').select('COUNT(*)', "count");
            if (req.params.class > -1) query = query.where('row.class = :id', {id: req.params.class})
            query.getRawOne()
                .then((value: any)=>{
                    result = result.map((char: Character)=>{
                        return _.pick(char, ['name', 'base_level', 'job_level', 'base_exp', 'job_exp', 'class', 'sex']);
                    });
                    res.status(200).json({
                        recordsTotal: parseInt(_.get(value, 'count', 0).toString()),
                        recordsFiltered: result.length,
                        data: _.orderBy(result, ['base_level', 'base_exp', 'job_level', 'job_exp', 'name'], ['desc', 'desc', 'desc', 'desc', 'desc'])
                    });
                })
                .catch((error: any)=>{
                    res.status(500).json(error);
                })
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            })
    }
    static async dashboard(req: any, res: any){
        let connection = await DBConnections.RAthenaConnection;
        let accounts = await connection
            .createQueryBuilder()
            .select("char.account_id", 'account_id')
            .addSelect("COUNT(char.account_id)", "total")
            .from("char")
            .groupBy('char.account_id')
            .execute();
        let characters = 0;
        accounts.forEach((account: any) => { characters += parseInt(account.total.toString(), 10); });
        accounts = accounts.length;
        let zeny = await Characters.zeny();
        zeny = parseInt(zeny.toString(), 10);
        let online = await Characters.usersOnline();
        online = parseInt(online.toString(), 10);
        let guilds = await connection.getRepository(Guild).createQueryBuilder().getMany();
        guilds = guilds.length;
        let guildMembers = await connection.getRepository(GuildMember).createQueryBuilder().getMany();
        guildMembers = guildMembers.length;
        let capturedCastles = await connection.getRepository(GuildCastle).createQueryBuilder().getMany();
        capturedCastles = capturedCastles.length;
        let stores = await connection.getRepository(Vending).createQueryBuilder().getMany();
        stores = stores.length;
        let storeItems = await connection.getRepository(VendingItem).createQueryBuilder().getMany();
        storeItems = storeItems.length;
        res.status(200).json({
            accounts: accounts,
            characters: characters,
            guilds: guilds,
            guildMembers: guildMembers,
            capturedCastles: capturedCastles,
            stores: stores,
            storeItems: storeItems,
            zeny: zeny,
            average: {
                charsAccount: `${(characters*100/accounts).toFixed(2)}%`,
                zenyAccount: (zeny/accounts).toFixed(2),
                zenyChars: (zeny/characters).toFixed(2),
                guildMembers: `${(guildMembers*100/guilds).toFixed(2)}%`,
                itemsStore: stores > 0? (storeItems/stores).toFixed(2).toString() : '0.00',
                online: online > 0? `${(accounts*100/online).toFixed(2)}%` : '0.00%'
            }
        })
        // let zeny = await Characters.zeny();
        
    }
}