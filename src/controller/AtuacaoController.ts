import {Request, Response} from "express";
import { AtuacaoService } from "../services/AtuacaoService";

class AtuacaoController{

    async create(req: Request, res: Response){
        const {id, atuacao} = req.body;

        const atuacaoService = new AtuacaoService();

        const atua = await atuacaoService.execute({
            id,
            atuacao
        });

        return res.json(atua);
    }

}

export {AtuacaoController};