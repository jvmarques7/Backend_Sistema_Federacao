import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { Modalidade } from "./Modalidade";
import { Categoria } from "./Categoria";

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    nomeCompleto: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column()
    nacionalidade: string;

    @Column()
    dt_nascimento: Date;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    sexo: string;

    @Column()
    modalidade_id: string;

    @JoinColumn({name: "modalidade_id"})
    @ManyToOne(() => Modalidade)
    modalidade: Modalidade;

    @Column()
    categoria_id :string;

    @JoinColumn({name: "categoria_id"})
    @ManyToOne(() => Categoria)
    categoria: Categoria;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }

}

export {User}
