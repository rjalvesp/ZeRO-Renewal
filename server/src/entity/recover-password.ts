import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity({name: "recover_passwords"})
export class RecoverPassword {
    @PrimaryGeneratedColumn()
    id: number = 0;
    
    @Column({
        type: 'varchar',
        length: 255,
        default: ''
    })
    encoded: string = '';
    
    @Column({
        type: 'int',
        width: 11,
        nullable: false,
        unsigned: true,
    })
    id_user: string = '';

    @Column({
        type: 'tinyint',
        nullable: false
    })
    consumed: boolean = false;
    
    @Column({
        type: 'varchar',
        length: 255,
        default: ''
    })
    datetime: string = '';
}