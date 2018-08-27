import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity({name: "guild"})
export class Guild {

    @PrimaryColumn()
    guild_id: number = 0;
    @Column({
        type: 'varchar',
        length: 30,
        nullable: false,
        default: ''
    })
    name: string = '';
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    char_id: number = 0;
    @Column({
        type: 'varchar',
        length: 30,
        nullable: false,
        default: ''
    })
    master: string = '';
    @Column({
        type: 'tinyint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    guild_lv: number = 0;
    @Column({
        type: 'tinyint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    connect_member: number = 0;
    @Column({
        type: 'tinyint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    max_member: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 1
    })
    average_lv: number = 0;
    @Column({
        type: 'bigint',
        width: 20,
        unsigned: true,
        nullable: false,
        default: 0
    })
    exp: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    next_exp: number = 0;
    @Column({
        type: 'tinyint',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    skill_point: number = 0;
    @Column({
        type: 'varchar',
        length: 60,
        nullable: false,
        default: ''
    })
    mes1: string = '';
    @Column({
        type: 'varchar',
        length: 60,
        nullable: false,
        default: ''
    })
    mes2: string = '';
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    emblem_len: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    emblem_id: number = 0;
    @Column({
        type: 'blob',
        nullable: true,
        default: 0
    })
    emblem_data: any = 0;
    @Column({
        type: 'datetime',
        nullable: true
    })
    last_master_change: string = '';
    constructor(){
    }
}
