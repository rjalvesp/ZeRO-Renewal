import { DBConnections } from '../../classes/connection';
const _ = require('lodash');
export class ItemsController {
    static async mvpCards(req: any, res: any){
        let cards : Array<number> = [
            4047, 4054,
            4121, 4123, 4128, 4131, 4132, 4134, 4135, 4137, 4140, 4142, 4143, 4144, 4145, 4146, 4147, 4148, 4168, 4174, 4198,
            4236, 4263, 4276, 4290,
            4302, 4305, 4318, 4324, 4342, 4352, 4357, 4361, 4363, 4367, 4372, 4374, 4376, 4386, 4399,
            4403, 4407, 4408, 4419, 4425, 4430, 4441, 4456
        ];
        let Connection = await DBConnections.LogConnection;
        let cardResults: Array<{id: number, total: number}> = [];
        Connection.createQueryBuilder()
            .select("picklog.nameid", 'nameid')
            .addSelect("COUNT(picklog.nameid)", "total")
            .from("picklog")
            .where('nameid in (:id) and amount > 0', {id: cards})
            .groupBy('picklog.nameid')
            .execute()
            .then((result: Array<any>)=>{
                cards.forEach((cardId: number)=>{
                    let cardResult = result.find((cardTotal: any)=>{
                        return cardTotal.nameid === cardId;
                    })
                    cardResults.push({
                        id: cardId,
                        total: parseInt(_.get(cardResult, 'total', 0).toString(), 10)
                    });
                })
                res.status(200).json(_.orderBy(cardResults, ['total', 'id'], ['desc', 'asc']));
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            })
    }  
}