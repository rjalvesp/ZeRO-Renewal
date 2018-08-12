export class Token {
    token: string;
    refresh_token: string;
    created_at: string;
    expires_in: number;
    id_user: number;

    constructor(cfg: any){
        this.token = cfg.token;
        this.refresh_token = cfg.refresh_token;
        this.created_at = cfg.created_at;
        this.expires_in = cfg.expires_in;
        this.id_user = cfg.id_user;
    }
    get json(){
        return {
            token: this.token,
            refresh_token: this.refresh_token,
            created_at: this.created_at,
            expires_in: this.expires_in
        };
    }
    
}