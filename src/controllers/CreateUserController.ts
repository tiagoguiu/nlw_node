import {Request, Response} from "express";
import { CreateUserService } from "../services/CreateUserService";



class CreateUserController {

    async handle( request:Request, response:Response ){
        
//DESESTRUTURAÇÃO DO REQ.BODY PARA CAPTAR OS PARAMETROS POSTADOS        
        const { name, email, admin , password } = request.body;


        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name,email,admin, password});

        return response.json(user);
//retornando as informações da requisição 
    }
}

export { CreateUserController }