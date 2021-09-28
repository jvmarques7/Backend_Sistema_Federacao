import { Request, Response } from "express";
import { UserService } from "../services/UserService";

interface User {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  rg: string;
  dt_nascimento: Date;
}

class UserController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const userService = new UserService();

    const users = await userService.execute({
      email,
      password,
    });

    return res.json(users);
  }

  // async complete(req: Request, res: Response){
  //     const {nomeCompleto, rg, cpf, nacionalidade, dt_nascimento, sexo/*, modalidade_id, categoria_id, atuacao_id*/} = req.body;

  //     const userService = new UserService();

  //     const users = await userService.complete({
  //         nomeCompleto,
  //         rg,
  //         cpf,
  //         nacionalidade,
  //         dt_nascimento,
  //         sexo
  //         // modalidade_id,
  //         // categoria_id,
  //         // atuacao_id
  //     });

  //     return res.json(users);
  // }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { cpf, rg, email, name, dt_nascimento } = req.body;

    console.log(id);
    const newUser: User = {
      id,
      cpf,
      rg,
      email,
      name,
      dt_nascimento,
    };
    const userService = new UserService();

    const updateUser = userService.update(newUser);

    return res.status(200).json(updateUser);
  }

  async list(req: Request, res: Response) {
    const userService = new UserService();

    const usersList = await userService.show();

    return res.json(usersList);
  }

  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const userService = new UserService();

    const token = await userService.authenticate({
      email,
      password,
    });

    console.log(res.json(token));

    return res.json(token);
  }
}

export { UserController };
