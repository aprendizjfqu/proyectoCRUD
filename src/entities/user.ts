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
    personaId: number

    @Column()
    mensaje: string

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    upDateAd: Date

}