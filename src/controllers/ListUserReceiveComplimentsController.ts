import { request, Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";


class ListUserReceiveComplimentsController{

    async handle(reques:Request, response:Response){

        const { user_id } = request;


        const listUserSendComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = listUserSendComplimentsService.execute(user_id);

        return response.json(compliments);
    };
}

export { ListUserReceiveComplimentsController }