import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import { classToPlain } from "class-transformer";


class ListUsersService {

    async execute(){
        
        const usersRepositories = getCustomRepository(UserRepositories);

        const users = await usersRepositories.find();

        /**
         * passando a exclusão da senha feita pelo exclude do class 
         * transformer para não retornarmos a senha quando o metodo for get users
         */
        return classToPlain(users);
    }
}

export { ListUsersService }