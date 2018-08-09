var _ = require('lodash');
export class AuthorizationController {
    static login = (req: any, res: any)=> {
        // UsersCollection.all({selector: { email: req.body.email } } )
        // .then((response: any)=>{
        //     if (response.length === 0) return res.status(400).json({error: 'Invalid email', status: 400});
        //     let user : User = _.first(response);
        //     if (!user.validate(req.body.password)) return res.status(400).json({error: 'Invalid password', status: 400});
        //     let token = new Token({}, user.json._id);
        //     token.save()
        //     .then(()=>{ res.status(200).json(token.json); })
        //     .catch((err)=>{ res.status(500).json(err); });
        // })
        // .catch((err)=>{ res.status(500).json(err); });
    }
    static logout = (req: any, res: any)=> {
        // (req.user as User).deleteTokens()
        // .then(()=>{ return res.status(204).send(); })
        // .catch((err)=>{ return res.status(500).json(err); });
    }
    static refresh = (req: any, res: any)=> {
        // TokensCollection.all({ selector : { bearer : req.body.bearer } } )
        // .then((response)=>{
        //     console.log(req.body);
        //     console.log(req.user);
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