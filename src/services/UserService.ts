import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserReporitory";

const tokenList ={}

interface IUserRequest {
    nomeCompleto: string;
    rg: string;
    cpf: string;
    nacionalidade: string;
    dt_nascimento: Date;
    sexo: string;
    email: string;
    password: string;
    modalidade_id: string;
    categoria_id: string;
}

interface IAuthenticete {
    email: string;
    password: string;
}

class UserService{

    async execute({nomeCompleto, rg, cpf, nacionalidade, dt_nascimento, sexo, email, password, modalidade_id, categoria_id} : IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories);

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
            nomeCompleto,
            rg,
            cpf,
            nacionalidade,
            dt_nascimento,
            sexo,
            email,
            password: passwordHash,
            modalidade_id,
            categoria_id
        })

        await usersRepository.save(user);

        return user;
    }

    async show(){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find();

        return users;
    }

    async authenticate({email, password} : IAuthenticete){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        if( !user ){
            throw new Error("Email ou senha incorretas!")
        }

        const passwordMatch = await compare(password, user.password);

        if(!password){
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

        /* const refreshToken = sign({
            email: user.email
        }, 
            process.env.REFRESHTOKEN,
        {
            expiresIn: "86400"
        }
        ); */

        const response = {
            "status": "Logged in",
            "token": token
        }


        return response;

    }

}

export {UserService};