import {Entity, PrimaryGeneratedColumn , Column} from "typeorm";
import { Crypto } from "../../classes/crypto";

@Entity({name: "tokens"})
export class Token {

    @PrimaryGeneratedColumn()
    id: number = 0;
    @Column()
    token: string = '';
    @Column()
    refresh_token: string = '';
    @Column()
    expires_in: number = 0;
    @Column()
    created_at: string = '';
    @Column()
    id_user: number = 0;

    constructor(){
    }

}
