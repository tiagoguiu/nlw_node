import { getCustomRepository, getRepository } from "typeorm"
import { Compliment } from "../entities/Compliment";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UsersRepositories";


interface IComplimentRequest{
    tag_id : string;
    user_sender : string;
    user_receiver : string;
    message : string;
}
class CreateComplimentService{

    async execute({
        tag_id, 
        user_sender, 
        user_receiver, 
        message}:IComplimentRequest){

        //ja estamos pensando que o usuario esta autenticado aqui e é um usuario valido
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        //getCustomRepository é diferente de getRepository o acesso aos atributos mudam
        const usersRepositories = getCustomRepository(UserRepositories);

        if(user_sender == user_receiver){
            throw new Error("Impossivel enviar elogios a si mesmo");
        }


        //o valor que recebe por padrao sem pedir nada é o id
        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if(!userReceiverExists){
            throw new Error("Usuario recebedor não existe");
        }
        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message,
        });

        await complimentsRepositories.save(compliment);

        return compliment;

    }

}

export { CreateComplimentService }