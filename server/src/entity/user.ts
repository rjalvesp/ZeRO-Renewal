import {Entity, PrimaryGeneratedColumn , Column} from "typeorm";
import { Crypto } from "../../classes/crypto";

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn()
    id: number = 0;
    @Column()
    email: string = '';
    @Column()
    username: string = '';
    @Column()
    password: string = '';
    @Column()
    salt: string = '';
    @Column()
    dob: string = '';
    @Column()
    sex: string = '';
    @Column()
    admin: boolean = false;

    constructor(){
    }

    validate (password: string){
        if (!this.id) return false;
        return Crypto.generatePassword(password, this.salt) === this.password;
    }
}
