import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserSendComplimentsService {

    //essa função não faz parte do node ou do js apenas a nomeclatura utilizada
    async execute(user_id : string){

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where : {
                user_Receiver : user_id.split
            }
        });
        return compliments;
//retornando todos os elogios que foram recebidos pelo usuario
//por isso utilizando o find não o findOne


    };
};

export  { ListUserSendComplimentsService }; 