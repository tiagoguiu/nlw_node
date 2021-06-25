import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UsersRepositories"



class ListUserReceiveComplimentsService {

    //essa função não faz parte do node ou do js apenas a nomeclatura utilizada
    async execute(user_id : string){

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where : {
                user_Receiver : user_id.split
            },
            relations : ["userSender", "userReceiver", "tag"],
//busca todos os relacionamentos entra esses  campos das tabelas
            
        });
        return compliments;
//retornando todos os elogios que foram recebidos pelo usuario
//por isso utilizando o find não o findOne


    };
};

export  { ListUserReceiveComplimentsService }; 