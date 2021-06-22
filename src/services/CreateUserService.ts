import { UserRepositories } from "../repositories/UsersRepositories";
import {getCustomRepository} from "typeorm";


interface IUserRequest{
    name : string;
    email : string;
    admin? : boolean;
}



class CreateUserService{
    async execute( { name , email , admin }:IUserRequest){
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

        const user = usersRepository.create({//Não precisa ser assincrono
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    };
}

export { CreateUserService }