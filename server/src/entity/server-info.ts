import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({name: 'ragsrvinfo'})
export class ServerInfo {
    @PrimaryColumn() index: number = 0;
    @Column() name: string = '';
    @Column() exp: number = 0;
    @Column() jexp: number = 0;
    @Column() drop: number = 0;
}