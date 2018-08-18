import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "login"})
export class Login {
    @PrimaryGeneratedColumn()
    account_id: number = 0;
    @Column()
    userid: string = '';
    @Column()
    user_pass: string = '';
    @Column()
    sex: string = '';
    @Column()
    email: string = '';
    @Column()
    group_id: number = 0;
    @Column()
    state: number = 0;
    @Column()
    unban_time: number = 0;
    @Column()
    expiration_time: number = 0;
    @Column()
    logincount: number = 0;
    @Column()
    lastlogin: string = '';
    @Column()
    last_ip: string = '';
    @Column()
    birthdate: string = '';
    @Column()
    character_slots: number = 0;
    @Column()
    pincode: string = '';
    @Column()
    pincode_change: number = 0;
    @Column()
    vip_time: number = 0;
    @Column()
    old_group: number = 0;
    constructor(){
    }
}
