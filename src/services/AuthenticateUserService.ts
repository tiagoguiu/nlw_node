import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UserRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest{

    email : string;
    password : string;
}

class AuthenticateUserService {

    async execute({email , password}:IAuthenticateRequest){

        const usersRepositories = getCustomRepository(UserRepositories);
        //VERIFICAR SE O EMAIL EXISTE
        const user = await usersRepositories.findOne({email});

        if(!user){
            throw new Error("Email/senha estão incorretos");
//quanto menos explicativo melhor é no quesito segurança
        }

        //VERIFICAR SE A SENHA ESTA CORRETA
        const passwordMatch = await compare(password, user.password);
        /**
         * quando a função chamara retornar uma promisse será necessario 
         * utilizar o await, pela possibilidade de ser futuro.
         * ex função compare espera promisse, a função sign não.
         */

        if(!passwordMatch){
            throw new Error("Email/senha estão incorretos")
        }

        //GERAR O TOKEN

        const token = sign({
            email : user.email
        },
        "a9113c0a725e9ffdc4f848480a7fdff8", 
        {
            subject : user.id,
            expiresIn : "1d",
        });
        return token;

    }

}

export { AuthenticateUserService };