import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";
/**
 * versão 4 numeros aleatorios
 * versão 1 por tempo e mac
 * versão 3 e 5 são id gerados por hash
 */

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
    
    constructor(){
        //verificando se o id está preenchido
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { User };