import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
class Endereco {

    @PrimaryColumn()
    readonly id: string;

    @Column({nullable: true,})
    cep: string;

    @Column({nullable: true,})
    logradouro: string;

    @Column({nullable: true,})
    complemento: string;

    @Column({nullable: true,})
    bairro: string;

    @Column({nullable: true,})
    numero: number;

    @Column({nullable: true,})
    cidade: string;

    @Column({nullable: true,})
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
