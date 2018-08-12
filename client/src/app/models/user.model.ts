export class User {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    dob: string;
    captcha: string;
    public get json() : any {
        return {
            username : this.username,
            email : this.email,
            password : this.password,
            confirmPassword : this.confirmPassword,
            dob : this.dob
        }
    }
    constructor(cfg: any) {
        this.username = cfg.username;
        this.email = cfg.email;
        this.password = cfg.password;
        this.confirmPassword = cfg.confirmPassword;
        this.dob = cfg.dob;
        this.captcha = cfg.captcha;
    }
}