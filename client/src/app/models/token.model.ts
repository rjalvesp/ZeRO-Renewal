export class Token {
    bearer: string;
    createdAt: string;
    expiresIn: number;
    idUser: string;

    constructor(cfg: any){
        this.bearer = cfg.bearer;
        this.createdAt = cfg.createdAt;
        this.expiresIn = cfg.expiresIn;
        this.idUser = cfg.idUser;
    }
    get json(){
        return {
            bearer: this.bearer,
            createdAt: this.createdAt,
            expiresIn: this.expiresIn
        };
    }
    
}