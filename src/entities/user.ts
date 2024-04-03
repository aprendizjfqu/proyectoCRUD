import { create } from "domain";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity()

export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    identification: number

    @Column({
        default: true
    })
    active: boolean

    @Column()
    comment: string


    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    upDateAd: Date

}