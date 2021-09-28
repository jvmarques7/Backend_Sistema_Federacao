import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserReporitory";
import {User} from '../entities/User';
import { Request, Response } from "express";

const tokenList ={}

interface IUserRequest {
    email: string;
    password: string;
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

interface IUserComplete {
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

class UserService{

// async complet({nomeCompleto, rg, cpf, nacionalidade, dt_nascimento, sexo}:IUserUpdate){
    
//     const userRepository = getCustomRepository(UsersRepositories);
//         const user = userRepository.findOne({where : {email} });
//             nomeCompleto,
//             rg,
//             cpf,
//             nacionalidade,
//             dt_nascimento,
//             sexo
//         })
//     }

async update({users, email, endereco, modalidade, categoria, atuacao}){
    const userRepository = getCustomRepository(UsersRepositories);
    const updateUser = getCustomRepository(UsersRepositories);
    const res = new Response();
    
    try {
      const updateUser = await userRepository.findOne({ where: { email } });
      const {
        nomeCompleto,
        newEmail,
        // firstPhone,
        dt_nascimento,
        cpf,
        rg,
        // secondPhone,
        // mobilePhone,
      } = users;

      updateUser.cpf = cpf || users.cpf;
      updateUser.rg = rg || users.rg;
      updateUser.nomeCompleto = nomeCompleto || users.nomeCompleto;
    //   updateUser.first_phone = firstPhone ? firstPhone : null;
      updateUser.email = newEmail || users.newEmail;
    //   updateUser.second_phone = secondPhone ? secondPhone : null;
    //   updateUser.mobile_phone = mobilePhone || users.mobilePhone;
      updateUser.dt_nascimento = dt_nascimento || users.dt_nascimento;

    //   const updateEndereco = await Endereco.findOne({
    //     where: { user_id: users.id },
    //   });

    //   const { cep, logradouro, number, complemento } = address;
    //   updateAddress.cep = cep || address.cep;
    //   updateAddress.logradouro = logradouro || address.logradouro;
    //   updateAddress.numero = number || address.number;
    //   updateAddress.complemento = complemento || address.complemento;


     const newUser = await userRepository.save(users);
    //   const newAddress = await updateAddress.save();

      return newUser({
        newUser: {
          id: newUser.id,
          nomeCompleto: newUser.nomeCompleto,
          cpf: newUser.cpf,
          dt_nasimcneto: newUser.dt_nascimento,
          rg: newUser.rg,
          email: newUser.newEmail,
        //   firtPhone: newUser.first_phone ? newUser.first_phone : null,
        //   secondPhone: newUser.second_phone ? newUser.second_phone : null,
        //   mobilePhone: newUser.mobile_phone,
        //   numero: newUser.number,
        },
        // newAddress,
      });
    } catch (err) {
      const error = new Error(err);

      return error;
    }
}

async complete({nomeCompleto, rg, cpf, nacionalidade, dt_nascimento, sexo, /*modalidade_id, categoria_id, atuacao_id*/} : IUserComplete){
    const usersRepository = getCustomRepository(UsersRepositories);
        const user = usersRepository.create({
            nomeCompleto,
            rg,
            cpf,
            nacionalidade,
            dt_nascimento,
            sexo,
            // modalidade_id,
            // categoria_id,
            // atuacao_id
        })
    }

    async execute({email, password} : IUserRequest){
    const usersRepository = getCustomRepository(UsersRepositories);
    // async execute({nomeCompleto, rg, cpf, nacionalidade, dt_nascimento, sexo, email, password, modalidade_id, categoria_id} : IUserRequest){
    //     const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) {
            throw new Error("Email incorreto!");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email,
        });

        if(userAlreadyExists) {
            throw new Error("User already exists");
        }

        if(!password){
            throw new Error("Password needs to exists!");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            email,
            password: passwordHash
        })

        await usersRepository.save(user);

        return user;
    }

    async show(){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find();

        return users;
    }

    // async update(){
    //     const usersRepositories = getCustomRepository(UsersRepositories);

    //     const users = await usersRepositories.update

    // }

    async authenticate({email, password} : IAuthenticete){
        const usersRepositories = getCustomRepository(UsersRepositories);

        var response = {"status": "Logged in", "token": "", "error": "Login Incorreto"};

        try{
            const user = await usersRepositories.findOne({
                email
            });
    
            if( !user ){
                throw new Error("Email ou senha incorretas!")
            }
    
            const passwordMatch = await compare(password, user.password);
    
            if(!passwordMatch){
                throw new Error("Email ou senha incorretas!")
            }
    
            const token = sign({
                email: user.email
            }, 
                process.env.SECRET,
            {
               subject: user.id,
               expiresIn: "86400" 
            }
            );
    
            response = {
                "status": "Logged in",
                "token": token,
                "error": ""
            }
        }catch(err){
            return response.error
        }


        return response;

    }

}

export {UserService};