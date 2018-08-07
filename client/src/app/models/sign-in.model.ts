export class SignInModel {
    username: string;
    password: string;
    captcha: string;
    constructor(cfg: any) {
        this.username = cfg.username;
        this.password = cfg.password;
        this.captcha = cfg.captcha;
    }
}