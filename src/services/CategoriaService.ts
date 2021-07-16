import { getCustomRepository } from "typeorm";
import { CategoriasRepositories } from "../repositories/CategoriaRepository";

interface ICategoriaService{
    id: number;
    categoria: string;
}

class CategoriaService{

    async execute({id, categoria} : ICategoriaService){
        
        const categoriaRepository = getCustomRepository(CategoriasRepositories);

        if(!id){
            throw new Error("Identificador incorreto!");
        }

        const idAlreadyExists = await categoriaRepository.findOne({
            id,
        });

        if(idAlreadyExists){
            throw new Error("Identificador já existe!");
        }

        //Validação Categoria
        if(!categoria){
            throw new Error("Insira um nome válido para categoria!");
        }

        const categoriaAlreadyExists = await categoriaRepository.findOne({
            categoria,
        });

        if(categoriaAlreadyExists){
            throw new Error("Categoria já cadastrada!");
        }

        const categ = categoriaRepository.create({
            id, categoria
        })

        await categoriaRepository.save(categ);

        return categ;

    }

}

export { CategoriaService };