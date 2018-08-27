export class User {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    dob: string;
    captcha: string;
    sex: string;
    admin: boolean;
    public get json() : any {
        return {
            username : this.username,
            email : this.email,
            password : this.password,
            confirmPassword : this.confirmPassword,
            dob : this.dob,
            admin: this.admin,
            sex: this.sex
        }
    }
    constructor(cfg: any) {
        this.username = cfg.username;
        this.email = cfg.email;
        this.password = cfg.password;
        this.confirmPassword = cfg.confirmPassword;
        this.dob = cfg.dob;
        this.captcha = cfg.captcha;
        this.admin = cfg.admin;
        this.sex = cfg.sex;
    }
}