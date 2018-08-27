import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity({name: "vendings"})
export class Vending {

    @PrimaryColumn()
    id: number = 0;
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
        type: 'enum',
        enum: ['M', 'F', 'U'],
        nullable: false,
        default: 'U'
    })
    sex: string = '';
    @Column({
        type: 'varchar',
        length: 20
    })
    map: string = '';
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    x: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    y: number = 0;
    @Column({
        type: 'varchar',
        length: 80
    })
    title: string = '';
    @Column({
        type: 'char',
        length: 1
    })
    body_direction: string = '';
    @Column({
        type: 'char',
        length: 1
    })
    head_direction: string = '';
    @Column({
        type: 'char',
        length: 1
    })
    sit: string = '';
    @Column({
        type: 'tinyint',
        width: 4,
        unsigned: true,
        nullable: false,
        default: 0
    })
    autotrade: number = 0;
    constructor(){
    }
}
