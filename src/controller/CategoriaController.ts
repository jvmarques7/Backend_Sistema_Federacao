import {Request, Response} from "express";
import { CategoriaService } from "../services/CategoriaService";

class CategoriaController{

    async create(req: Request, res: Response){
        const {id, categoria} = req.body;

        const categoriaService = new CategoriaService();

        const categ = await categoriaService.execute({
            id,
            categoria
        });

        return res.json(categ);
    }

}

export {CategoriaController};