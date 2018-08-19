import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity({name: "news"})
export class News {
    @PrimaryGeneratedColumn()
    id: number = 0;
    
    @Column({
        type: 'varchar',
        length: 255,
        default: ''
    })
    date: string = '';
    
    @Column({
        type: 'text',
        default: ''
    })
    html: string = '';
}