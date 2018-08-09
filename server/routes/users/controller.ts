// import { Users } from "../../classes/users/users";
// import { User } from "../../classes/users/user";
// var _ = require('lodash');
// let UsersCollection : Users = new Users();
// export class UsersController {
//     static index = (req: any, res: any)=> {
//         UsersCollection.all({})
//         .then((response: any)=>{
//             var response = _.map(response, 'json');
//             res.status(200).json(response);
//         })
//         .catch((err)=>{return res.status(500).json(err);});
//     }
//     static datatables = (req: any, res: any)=> {
//         UsersCollection.all({})
//         .then((response: any)=>{
//             let result = {
//                 recordsTotal: response.length,
//                 recordsFiltered: response.length,
//                 data: _.orderBy(_.map(response, 'json'), ['name'], ['asc'])
//             }
//             res.status(200).json(result);
//         })
//         .catch((err)=>{return res.status(500).json(err);});
//     }
//     static get = (req: any, res: any)=> {
//         UsersCollection.get(req.params.id)
//         .then((response: any)=>{
//             res.status(200).json(_.omit(response.json, ['_rev', 'salt', 'password', 'type']));
//         })
//         .catch(()=>{});
//     }
//     static add = (req: any, res: any)=> {
//         UsersCollection.all({selector: { email: req.body.email }})
//         .then((response: any)=>{
//             if (response.length !== 0) return res.status(400).json({error: 'Email has been taken', status: 400});
//             var user = new User(req.body);        
//             user.save()
//             .then((response: any)=>{
//                 res.status(201).json(response.json);
//             })
//             .catch((err)=>{return res.status(500).json(err);});
//         })
//         .catch((err)=>{return res.status(500).json(err);});
//     }
//     static edit = (req: any, res: any)=> {
//         var user = new User(req.body);
//         user.save()
//         .then((response: any)=>{
//             res.status(201).json(response.json);
//         })
//         .catch((err)=>{return res.status(500).json(err);});
//     }
//     static delete = (req: any, res: any)=> {
        
//         UsersCollection.get(req.params.id)
//         .then((response: any)=>{
//             response.delete()
//             .then((response: any)=>{
//                 res.status(204).send();
//             })
//             .catch((err: any)=>{return res.status(500).json(err);});
//         })
//         .catch((err)=>{return res.status(500).json(err);});
//     }
// }