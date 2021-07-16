import { getCustomRepository } from "typeorm";
import { ModalidadesRepositories } from "../repositories/ModalidadeRepository";

interface IModalidadeService{
    id: number;
    modalidade: string;
}

class ModalidadeService{

    async execute({id, modalidade} : IModalidadeService){
        
        const modalidadeRepository = getCustomRepository(ModalidadesRepositories);

        if(!id){
            throw new Error("Identificador incorreto!");
        }

        const idAlreadyExists = await modalidadeRepository.findOne({
            id,
        });

        if(idAlreadyExists){
            throw new Error("Identificador já existe!");
        }

        //Validação modalidade
        if(!modalidade){
            throw new Error("Insira um nome válido para modalidade!");
        }

        const modalidadeAlreadyExists = await modalidadeRepository.findOne({
            modalidade,
        });

        if(modalidadeAlreadyExists){
            throw new Error("modalidade já cadastrada!");
        }

        const modal = modalidadeRepository.create({
            id, modalidade
        })

        await modalidadeRepository.save(modal);

        return modal;

    }

}

export { ModalidadeService };