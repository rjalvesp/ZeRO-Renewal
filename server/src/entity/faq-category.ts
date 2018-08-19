import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity({name: "faq_categories"})
export class FaqCategory {
    @PrimaryGeneratedColumn()
    id: number = 0;
    
    @Column({
        type: 'varchar',
        length: 255,
        default: ''
    })
    name: string = '';
}