import { FaqCategory } from './../../src/entity/faq-category';
import { WebConnection } from '../../classes/connection';
const _ = require('lodash');
export class FaqsCategoriesController {
    static async index(req: any, res: any){
        let webConnection = await WebConnection;
        webConnection.createQueryBuilder()
            .select("row")
            .from(FaqCategory, "row")
            .getMany()
            .then((result: Array<any>)=>{
                res.status(200).json(result);
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            })
    }
    static async datatables(req: any, res: any){
        let webConnection = await WebConnection;
        webConnection.createQueryBuilder()
            .select("row")
            .from(FaqCategory, "row")
            .take(req.body.lenght)
            .skip(req.body.start)
            .getMany()
            .then((result: Array<any>)=>{
                console.log(result);
                webConnection.getRepository(FaqCategory)
                    .createQueryBuilder('item')
                    .select('COUNT(*)', "count")
                    .getRawOne()
                    .then((value: any)=>{
                        res.status(200).json({
                            recordsTotal: parseInt(_.get(value, 'count', 0).toString()),
                            recordsFiltered: result.length,
                            data: result,
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
    static async get(req: any, res: any){
        let webConnection = await WebConnection;
        webConnection.createQueryBuilder()
            .select("row")
            .from(FaqCategory, "row")
            .where('row.id = :id', { id: req.params.id})
            .getOne()
            .then((newItem: any) => {
                res.status(200).json(newItem? newItem : {});
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            });
    }
    static async add(req: any, res: any){
        let webConnection = await WebConnection;
        let item = new FaqCategory();
        item.name = req.body.name;
        webConnection.manager.save(item)
            .then((newItem: any) => {
                res.status(201).json(newItem? newItem : {});
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            });
    }
    static async edit(req: any, res: any){
        
        let webConnection = await WebConnection;
        webConnection.createQueryBuilder()
            .select("row")
            .from(FaqCategory, "row")
            .where('row.id = :id', { id: req.params.id})
            .getOne()
            .then((item: any) => {
                item.name = req.body.name;
                webConnection.manager.save(item)
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
        
        let webConnection = await WebConnection;
        webConnection.createQueryBuilder()
            .delete()
            .from(FaqCategory)
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