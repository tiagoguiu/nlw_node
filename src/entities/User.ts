import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("users") // referencia a tabela de usuarios
class User {

    @PrimaryColumn()
    readonly id : string;

    @Column()
    name : string;

    @Column()
    email : string;

    @Column()
    admin : boolean;

    @CreateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date; 
}
//59:06
export { User };