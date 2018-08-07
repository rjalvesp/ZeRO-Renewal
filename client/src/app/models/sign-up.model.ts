export class SignUpModel {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    captcha: string;
    constructor(cfg: any) {
        this.username = cfg.username;
        this.email = cfg.email;
        this.password = cfg.password;
        this.confirmPassword = cfg.confirmPassword;
        this.captcha = cfg.captcha;
    }
}