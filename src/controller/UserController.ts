import { Request, Response } from "express";
import { UserService } from "../services/UserService";

interface UserUpdate {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  rg: string;
  dt_nascimento: Date;
  naturalidade: string;
  clube: string;
  sexo: string;
  telefone: string;
  celular: string;
  passaporte: string;
  nacionalidade: string;
  atuacao_id: number;
  modalidade_id: number;
  categoria_id: number;
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

  async update(request, response) {

    const { cpf, rg, email, name, dt_nascimento, id, naturalidade, clube, sexo, telefone, celular, passaporte, nacionalidade,atuacao_id, modalidade_id, categoria_id } = request.body;
    console.log(request.body)
    const newUser: UserUpdate = {
      id,
      cpf,
      rg,
      email,
      name,
      dt_nascimento,
      naturalidade,
      clube,
      sexo,
      telefone,
      celular,
      passaporte,
      nacionalidade,
      atuacao_id,
      modalidade_id,
      categoria_id
    };
    const userService = new UserService();

    const updateUser = await userService.update(newUser);

    return response.status(200).json(updateUser);
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
