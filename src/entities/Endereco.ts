import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
class Endereco {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    cep: string;

    @Column()
    logradouro: string;

    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    numero: number;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    user_id: string;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }

}

export {Endereco}
