import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity({name: "vending_items"})
export class VendingItem {

    @PrimaryColumn()
    vending_id: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    index: number = 0;
    @Column({
        type: 'int',
        width: 10,
        unsigned: true,
        nullable: false,
        default: 0
    })
    cartinventory_id: number = 0;
    @Column({
        type: 'smallint',
        width: 5,
        unsigned: true,
        nullable: false,
        default: 0
    })
    amount: number = 0;
    @Column({
        type: 'int',
        width: 10,
        unsigned: true,
        nullable: false,
        default: 0
    })
    price: number = 0;
    constructor(){
    }
}
