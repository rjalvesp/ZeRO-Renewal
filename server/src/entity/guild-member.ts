import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity({name: "guild_member"})
export class GuildMember {

    @PrimaryColumn()
    guild_id: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    account_id: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    char_id: number = 0;
    @Column({
        type: 'tinyint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    hair: number = 0;
    @Column({
        type: 'smallint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    gender: number = 0;
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
        default: 0
    })
    lv: number = 0;
    @Column({
        type: 'bigint',
        width: 20,
        unsigned: true,
        nullable: false,
        default: 0
    })
    exp: number = 0;
    @Column({
        type: 'tinyint',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    exp_payper: number = 0;
    @Column({
        type: 'tinyint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 0
    })
    online: number = 0;
    @Column({
        type: 'tinyint',
        width: 6,
        unsigned: true,
        nullable: false,
        default: 0
    })
    position: number = 0;
    @Column({
        type: 'varchar',
        length: 24,
    })
    name: string = '';
    constructor(){
    }
}
