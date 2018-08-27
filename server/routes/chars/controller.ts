import { Character } from './../../src/entity/character';
import { Faq } from './../../src/entity/faq';
import { DBConnections } from '../../classes/connection';
import { JobClassCollection } from '../../classes/class-collection';
import { JobClass } from '../../classes/class';
import { JobClassTotal } from '../../classes/class-total';
const _ = require('lodash');
export class CharsController {
    static async classes(req: any, res: any){
        let connection = await DBConnections.RAthenaConnection;
        connection.createQueryBuilder()
            .select("char.class", 'class')
            .addSelect("COUNT(char.class)", "total")
            .from(Character, "char")
            .groupBy('char.class')
            .getRawMany()
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
                dtResult.data = _.sortBy(dtResult.data, ['name']);
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
                        return _.pick(char, ['name', 'base_level', 'job_level', 'base_exp', 'job_exp', 'sex']);
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
}