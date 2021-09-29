import { getCustomRepository } from "typeorm";
import { AtuacaoRepositories } from "../repositories/AtuacaoRepository";

interface IAtuacaoService{
    id: number;
    atuacao: string;
}

class AtuacaoService{

    async execute({id, atuacao} : IAtuacaoService){
        
        const atuacaoRepository = getCustomRepository(AtuacaoRepositories);

        if(!id){
            throw new Error("Identificador incorreto!");
        }

        const idAlreadyExists = await atuacaoRepository.findOne({
            id,
        });

        if(idAlreadyExists){
            throw new Error("Identificador já existe!");
        }

        //Validação modalidade
        if(!atuacao){
            throw new Error("Insira um nome válido para atuacao!");
        }

        const atuacaoAlreadyExists = await atuacaoRepository.findOne({
            atuacao,
        });

        if(atuacaoAlreadyExists){
            throw new Error("atuacao já cadastrada!");
        }

        const modal = atuacaoRepository.create({
            id, atuacao
        })

        await atuacaoRepository.save(modal);

        return modal;

    }

    async show(atuacao: IAtuacaoService){
        const atuacaoRepository = getCustomRepository(AtuacaoRepositories);

        try{
            const findAtuacao = await atuacaoRepository.findOne(atuacao.id);
            return atuacao;
        }catch(err){
            return "Atuacao não exite";
        }
    }

}

export { AtuacaoService };