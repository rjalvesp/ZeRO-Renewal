import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "char"})
export class Character {

    @PrimaryGeneratedColumn()
    char_id: number = 2000002;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    account_id: number = 0;
    @Column({
        type: 'tinyint',
        width: 1,
        nullable: false,
        default: 0
    })
    char_num: number = 0;
    @Column({
        type: 'varchar',
        length: 30,
        nullable: false,
        default: ''
    })
    name: string = '';
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    class: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 1
    })
    base_level: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 1
    })
    job_level: number = 0;
    @Column({
        type: 'bigint',
        width: 20,
        unsigned: true,
        nullable: false,
        default: 0
    })
    base_exp: number = 0;
    @Column({
        type: 'bigint',
        width: 20,
        unsigned: true,
        nullable: false,
        default: 0
    })
    job_exp: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    zeny: number = 0;
    @Column({
        type: 'smallint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 0
    })
    str: number = 0;
    @Column({
        type: 'smallint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 0
    })
    agi: number = 0;
    @Column({
        type: 'smallint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 0
    })
    vit: number = 0;
    @Column({
        type: 'smallint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 0
    })
    int: number = 0;
    @Column({
        type: 'smallint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 0
    })
    dex: number = 0;
    @Column({
        type: 'smallint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 0
    })
    luk: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    max_hp: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    hp: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    max_sp: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    sp: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    status_point: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    skill_point: number = 0;
    @Column({
        type: 'int',
        width: 11,
        nullable: false,
        default: 0
    })
    option: number = 0;
    @Column({
        type: 'tinyint',
        width: 3,
        nullable: false,
        default: 0
    })
    karma: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        nullable: false,
        default: 0
    })
    manner: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    party_id: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    guild_id: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    pet_id: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    homun_id: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    elemental_id: number = 0;
    @Column({
        type: 'tinyint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 0
    })
    hair: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    hair_color: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    clothes_color: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    body: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    weapon: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    shield: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    head_top: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    head_mid: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    head_bottom: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    robe: number = 0;
    @Column({
        type: 'varchar',
        length: 11,
        nullable: false,
        default: ''
    })
    last_map: string = '';
    @Column({
        type: 'smallint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 53
    })
    last_x: number = 0;
    @Column({
        type: 'smallint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 111
    })
    last_y: number = 0;
    @Column({
        type: 'varchar',
        length: 11,
        nullable: false,
        default: ''
    })
    save_map: string = '';
    @Column({
        type: 'smallint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 53
    })
    save_x: number = 0;
    @Column({
        type: 'smallint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 111
    })
    save_y: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    partner_id: number = 0;
    @Column({
        type: 'tinyint',
        width: 2,
        nullable: false,
        default: 0
    })
    online: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    father: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    mother: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    child: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    fame: number = 0;
    @Column({
        type: 'smallint',
        width: 3,
        unsigned: true,
        nullable: false,
        default: 0
    })
    rename: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    delete_date: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    moves: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    unban_time: number = 0;
    @Column({
        type: 'tinyint',
        width: 3,
        unsigned: true,
        nullable: false,
        default: 0
    })
    font: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    uniqueitem_counter: number = 0;
    @Column({
        type: 'enum',
        enum: ['M', 'F', 'U'],
        nullable: false,
        default: 'U'
    })
    sex: string = '';
    @Column({
        type: 'tinyint',
        width: 3,
        unsigned: true,
        nullable: false,
        default: 0
    })
    hotkey_rowshift: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    clan_id: number = 0;
    @Column({
        type: 'datetime',
        nullable: true,
        default: null
    })
    last_login: Date = new Date();
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    title_id: number = 0;
    @Column({
        type: 'tinyint',
        width: 3,
        unsigned: true,
        nullable: false,
        default: 0
    })
    show_equip: number = 0;

    constructor(){
    }
}
