import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity({name: "picklog"})
export class PickLog {

    @PrimaryColumn()
    id: number = 0;
    @Column({
        type: 'datetime',
    })
    time: Date = new Date();
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    char_id: number = 0;
    @Column({
        type: 'enum',
        enum: ['M','P','L','T','V','S','N','C', 'A','R','G','E','B','O','I','X','D','U','$','F','Y','Z','Q','H'],
        nullable: false
    })
    type: string = '';
    @Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    nameid: number = 0;
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    amount: number = 0;
    @Column({
        type: 'tinyint',
        width: 3,
        unsigned: true,
        nullable: false,
        default: 0
    })
    refine: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    card0: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    card1: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    card2: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    card3: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    option_id0: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    option_val0: number = 0;
    @Column({
        type: 'tinyint',
        width: 3,
        nullable: false,
        default: 0
    })
    option_parm0: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    option_id1: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    option_val1: number = 0;
    @Column({
        type: 'tinyint',
        width: 3,
        nullable: false,
        default: 0
    })
    option_parm1: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    option_id2: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    option_val2: number = 0;
    @Column({
        type: 'tinyint',
        width: 3,
        nullable: false,
        default: 0
    })
    option_parm2: number = 0;@Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    option_id3: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    option_val3: number = 0;
    @Column({
        type: 'tinyint',
        width: 3,
        nullable: false,
        default: 0
    })
    option_parm3: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    option_id4: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        nullable: false,
        default: 0
    })
    option_val4: number = 0;
    @Column({
        type: 'tinyint',
        width: 3,
        nullable: false,
        default: 0
    })
    option_parm4: number = 0;
    @Column({
        type: 'bigint',
        width: 20,
        unsigned: true,
        default: 0
    })
    uniqueid: number = 0;
    @Column({
        type: 'varchar',
        length: 11,
        default: ''
    })
    map: string = '';
    @Column({
        type: 'tinyint',
        width: 1,
        unsigned: true,
        default: 0
    })
    bound: number = 0;
    constructor(){
    }
}
