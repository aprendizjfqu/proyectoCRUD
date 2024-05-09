import { create } from "domain";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    identificación: number

    @Column()
    activo: boolean

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    upDateAd: Date

}