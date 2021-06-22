import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)//herda da classse repositorie varios metodos formato User
class UserRepositories extends Repository<User>{
    
}

export{UserRepositories}