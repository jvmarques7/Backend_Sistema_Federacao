import {Request, Response, } from "express"
import { UserService } from "../services/UserService"


class UserController {

    async create(req: Request, res: Response){
        const {nomeCompleto, rg, cpf, nacionalidade, dt_nascimento, sexo, email, password, modalidade_id, categoria_id} = req.body;

        const userService = new UserService();

        const users = await userService.execute({
            nomeCompleto, 
            rg, 
            cpf, 
            nacionalidade,
            dt_nascimento, 
            sexo, 
            email, 
            password, 
            modalidade_id, 
            categoria_id
        });

        return res.json(users);
    }

    async list(req: Request, res: Response){

        const userService = new UserService();

        const usersList = await userService.show();

        return res.json(usersList);

    }

    async authenticate(req: Request, res: Response){
        const {email, password} = req.body;

        const userService = new UserService();

        const token = await userService.authenticate({
            email,
            password
        });

        return res.json(token);
    }

}

export {UserController};