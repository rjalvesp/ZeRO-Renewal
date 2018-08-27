import { DBConnections } from "./connection";
import { Token } from "../src/entity/token";
import { User } from "../src/entity/user";

export class Authorization {
    static async Guard(req: any, res: any, next: any) {
        let bearer = (req.headers['authorization'] as string).replace('Bearer ', '');
        let webConnection = await DBConnections.WebConnection;
        
        webConnection.createQueryBuilder()
            .select("token")
            .from(Token, "token")
            .where("token.token = :token", { token: bearer })
            .getOne()
            .then((value: any)=>{
                let token : Token = <Token>value;
                webConnection.createQueryBuilder()
                    .select("user")
                    .from(User, "user")
                    .where("user.id = :id", { id: token.id_user })
                    .getOne()
                    .then((user: User) => {
                        req.user = user;
                        return next();
                    })
                    .catch((error: any)=>{
                        res.status(500).json(error);
                    });
            })
            .catch((error: any)=>{
                res.status(500).json(error);
            });
    };
    static async AdminGuard(req: any, res: any, next: any) {
        if (!req.user.admin) return res.status(401).json({reason: 'You are not admin'})
        return next();
    };
}