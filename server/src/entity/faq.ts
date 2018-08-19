import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity({name: "faqs"})
export class Faq {
    @PrimaryGeneratedColumn()
    id: number = 0;
    
    @Column({
        type: 'int',
        width: 11,
        unsigned: true,
        nullable: false,
        default: 0
    })
    id_category: number = 0;
    
    @Column({
        type: 'varchar',
        length: 255,
        default: ''
    })
    question: string = '';
    
    @Column({
        type: 'text',
        nullable: true
    })
    answer: string = '';
}