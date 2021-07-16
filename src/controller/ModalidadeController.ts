import {Request, Response} from "express"
import {ModalidadeService} from "../services/ModalidadeService"


class ModalidadeController{

    async create(req: Request, res: Response){

        const {id, modalidade} = req.body;

        const modalidadeService = new ModalidadeService();

        const modal = await modalidadeService.execute({
            id,
            modalidade
        });

        return res.json(modal);
    }
}

export {ModalidadeController};