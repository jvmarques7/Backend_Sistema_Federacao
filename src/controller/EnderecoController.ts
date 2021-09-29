import {Request, Response, } from "express";
import { EnderecoService } from "../services/EnderecoService";


class EnderecoController {

    async create(req: Request, res: Response){
        const {/*cep,
            logradouro,
            complemento,
            bairro,
            numero,
            cidade,
            estado,*/
            user_id} = req.body;

        const enderecoService = new EnderecoService();
        console.log(user_id)

        const endereco = await enderecoService.execute({
            /*cep,
            logradouro,
            complemento,
            bairro,
            numero,
            cidade,
            estado,*/
            user_id
        });

        return res.json(endereco);
    }


}

export {EnderecoController}