import { UserRepositories } from "../repositories/UsersRepositories";
import {getCustomRepository} from "typeorm";
import { hash } from "bcryptjs"


interface IUserRequest{
    name : string;
    email : string;
    admin? : boolean;
    password : string;
}



class CreateUserService{
    async execute( { name , email , admin , password}:IUserRequest){
        const usersRepository = getCustomRepository(UserRepositories);
//não é possivel fazer instancia do userrepositories() porque queremos utilizar um repositorio custormizado

        if(!email){
            throw new Error("Email incorreto");
        }

        const userAreadyExists = await usersRepository.findOne({email});

        //As excessões vão ser lançadas para a camada de cima que esta chamando o metodo
        if(userAreadyExists){
            throw new Error("O usuário já existe");
        }
        //criptografando senha
        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({//Não precisa ser assincrono
            name,
            email,
            admin,
            password: passwordHash,//atribuindo o valor criptografado a variavel antiga
        });

        await usersRepository.save(user);

        return user;
    };
}

export { CreateUserService }

//UMA FORMA DE IMPLEMENTAÇÃO DA TRATATIVA DE ERRO SERIA A UTULIZAÇÃO 
//DO TRY CATCH POR EXEMPLO PARA ENVIAR O ERRO POR