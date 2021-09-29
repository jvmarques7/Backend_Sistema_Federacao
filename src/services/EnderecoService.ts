import { getCustomRepository } from "typeorm";
import { EnderecoRepositories } from "../repositories/EnderecoRepository";

interface IEnderecoRequest{
    // cep: string;
    // logradouro: string;
    // complemento: string;
    // bairro: string;
    // numero: number;
    // cidade: string;
    // estado: string;
    user_id: string;
}


class EnderecoService{

    async execute({/*cep, logradouro, complemento, bairro, numero, cidade, estado,*/ user_id} : IEnderecoRequest){
        const enderecoRepository = getCustomRepository(EnderecoRepositories);
        // async execute({nomeCompleto, rg, cpf, nacionalidade, dt_nascimento, sexo, email, password, modalidade_id, categoria_id} : IUserRequest){
        //     const usersRepository = getCustomRepository(UsersRepositories);

            // if(!cep || !logradouro || !complemento || !complemento || !bairro || !cidade || !estado){
            //     throw new Error("Preencha todos os campos!");
            // }
    
            const endereco = enderecoRepository.create({
                // cep,
                // logradouro,
                // complemento,
                // bairro,
                // numero,
                // cidade,
                // estado,
                user_id
            })
    
            await enderecoRepository.save(endereco);
    
            return endereco;
        }

}

export {EnderecoService}
