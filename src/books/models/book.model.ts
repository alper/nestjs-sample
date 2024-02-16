import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public description: string;

    @Column()
    public author: string;
}