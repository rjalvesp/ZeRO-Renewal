import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity({name: "char"})
export class Character {

    @PrimaryColumn()
    char_id: number = 0;
    @Column()
    account_id: number = 0;
    @Column()
    char_num: number = 0;
    @Column()
    name: string = '';
    @Column()
    class: number = 0;
    @Column()
    base_level: number = 0;
    @Column()
    job_level: number = 0;
    @Column()
    base_exp: number = 0;
    @Column()
    job_exp: number = 0;
    @Column()
    zeny: number = 0;
    @Column()
    str: number = 0;
    @Column()
    agi: number = 0;
    @Column()
    vit: number = 0;
    @Column()
    int: number = 0;
    @Column()
    dex: number = 0;
    @Column()
    luk: number = 0;
    @Column()
    max_hp: number = 0;
    @Column()
    hp: number = 0;
    @Column()
    max_sp: number = 0;
    @Column()
    sp: number = 0;
    @Column()
    status_point: number = 0;
    @Column()
    skill_point: number = 0;
    @Column()
    option: number = 0;
    @Column()
    karma: number = 0;
    @Column()
    manner: number = 0;
    @Column()
    party_id: number = 0;
    @Column()
    guild_id: number = 0;
    @Column()
    pet_id: number = 0;
    @Column()
    homun_id: number = 0;
    @Column()
    elemental_id: number = 0;
    @Column()
    hair: number = 0;
    @Column()
    hair_color: number = 0;
    @Column()
    clothes_color: number = 0;
    @Column()
    body: number = 0;
    @Column()
    weapon: number = 0;
    @Column()
    shield: number = 0;
    @Column()
    head_top: number = 0;
    @Column()
    head_mid: number = 0;
    @Column()
    head_bottom: number = 0;
    @Column()
    robe: number = 0;
    @Column()
    last_map: number = 0;
    @Column()
    last_x: number = 0;
    @Column()
    last_y: number = 0;
    @Column()
    save_map: number = 0;
    @Column()
    save_x: number = 0;
    @Column()
    save_y: number = 0;
    @Column()
    partner_id: number = 0;
    @Column()
    online: number = 0;
    @Column()
    father: number = 0;
    @Column()
    mother: number = 0;
    @Column()
    child: number = 0;
    @Column()
    fame: number = 0;
    @Column()
    rename: number = 0;
    @Column()
    delete_date: number = 0;
    @Column()
    moves: number = 0;
    @Column()
    unban_time: number = 0;
    @Column()
    font: number = 0;
    @Column()
    uniqueitem_counter: number = 0;
    @Column()
    sex: string = '';
    @Column()
    hotkey_rowshift: number = 0;
    @Column()
    last_login: string = '';
    @Column()
    title_id: number = 0;
    @Column()
    show_equip: number = 0;

    constructor(){
    }
}
