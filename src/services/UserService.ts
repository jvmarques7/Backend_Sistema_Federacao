import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserReporitory";
import { User } from "../entities/User";
import { Request, Response, response } from "express";
import { EnderecoRepositories } from "../repositories/EnderecoRepository";
import { EnderecoService } from "./EnderecoService";

const tokenList = {};

interface IUserRequest {
  email: string;
  password: string;
}

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

interface Address {
  bairro: string;
  logradouro: string;
  cep: string;
  numero: number;
  cidade: string;
  estado: string;
  complemento: string;
  user_id: string;
}

interface IUserUpdate {
  nomeCompleto: string;
  rg: string;
  cpf: string;
  nacionalidade: string;
  dt_nascimento: Date;
  sexo: string;
  // modalidade_id: string;
  // categoria_id: string;
  // atuacao_id: string;
}

interface IAuthenticete {
  email: string;
  password: string;
}

class UserService {
  async update(user: UserUpdate, address: Address) {
    const userRepository = getCustomRepository(UsersRepositories);
    const res: Response = null;

    try {
      const updateUser = await userRepository.findOne(user.id);

      updateUser.cpf = user.cpf;
      updateUser.rg = user.rg;
      updateUser.nomeCompleto = user.name;
      updateUser.email = user.email;
      updateUser.dt_nascimento = new Date(user.dt_nascimento);
      updateUser.naturalidade = user.naturalidade;
      updateUser.clube = user.clube;
      updateUser.sexo = user.sexo;
      updateUser.telefone = user.telefone;
      updateUser.celular = user.celular;
      updateUser.passaporte = user.passaporte;
      updateUser.nacionalidade = user.nacionalidade;
      updateUser.atuacao_id = user.atuacao_id;
      updateUser.modalidade_id = user.modalidade_id;
      updateUser.categoria_id = user.categoria_id;

      const addressService = new EnderecoService();
      const returnAddress = addressService.update(address);

      const newUser = await userRepository.save(updateUser);

      return {
        id: newUser.id,
        name: newUser.nomeCompleto,
        cpf: newUser.cpf,
        dt_nascimento: newUser.dt_nascimento,
        rg: newUser.rg,
        email: newUser.email,
        naturalidade: newUser.naturalidade,
        clube: newUser.clube,
        sexo: newUser.sexo,
        telefone: newUser.telefone,
        celular: newUser.celular,
        passaporte: newUser.passaporte,
        nacionalidade: newUser.nacionalidade,
        atuacao_id: newUser.atuacao_id,
        modalidade_id: newUser.modalidade_id,
        categoria_id: newUser.categoria_id,
      };
    } catch (err) {
      const error = new Error(err);

      return error;
    }
  }

  async execute({ email, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);
    // async execute({nomeCompleto, rg, cpf, nacionalidade, dt_nascimento, sexo, email, password, modalidade_id, categoria_id} : IUserRequest){
    //     const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Email incorreto!");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    if (!password) {
      throw new Error("Password needs to exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      email,
      password: passwordHash,
    });

    await usersRepository.save(user);

    return user;
  }

  async show() {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.find();

    return users;
  }

  async showByCpf(cpf: string) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories
      .createQueryBuilder("users")
      .where("users.cpf like :cpf", { cpf: `%${cpf}%` })
      .getMany();

    return users;
  }

  async authenticate({ email, password }: IAuthenticete) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    var response = { status: "Logged in", token: "", error: "Login Incorreto" };

    try {
      const user = await usersRepositories.findOne({
        email,
      });

      if (!user) {
        throw new Error("Email ou senha incorretas!");
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("Email ou senha incorretas!");
      }

      const token = sign(
        {
          email: user.email,
        },
        process.env.SECRET,
        {
          subject: user.id,
          expiresIn: "86400",
        }
      );

      response = {
        status: "Logged in",
        token: token,
        error: "",
      };
    } catch (err) {
      return response.error;
    }

    return response;
  }
}

export { UserService };
