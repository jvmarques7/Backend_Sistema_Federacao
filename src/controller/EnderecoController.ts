import {Request, Response, } from "express";
import { EnderecoService } from "../services/EnderecoService";

interface EnderecoUpdate {
  bairro: string;
  logradouro: string;
  cep: string;
  numero: number;
  cidade: string;
  estado: string;
  complemento: string;
  user_id: string;
}


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

    async update(req: Request, res: Response) {
        const {
          bairro,
          logradouro,
          cep,
          numero,
          cidade,
          estado,
          complemento,
          user_id
        } = req.body;
        console.log(req.body);

        const newEndereco: EnderecoUpdate = {
          bairro,
          logradouro,
          cep,
          numero,
          cidade,
          estado,
          complemento,
          user_id,
        };
        const enderecoService = new EnderecoService();
    
        const updateEndereco = await enderecoService.update(newEndereco);
    
        return res.status(200).json(updateEndereco);
      }


}

export {EnderecoController}