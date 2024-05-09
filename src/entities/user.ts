import {
    Column, Entity, PrimaryGeneratedColumn, CreateDateColumn,
    UpdateDateColumn, BaseEntity,
    IntegerType
} from "typeorm";

@Entity()

export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    identification: number

    @Column()
    nombre: string

    @Column()
    apellidos: string


    @Column({
        default: true
    })

    @Column()
    comment: string


    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    upDateAd: Date

}