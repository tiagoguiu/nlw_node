import { Request, Response} from "express"
import { CreateComplimentService } from "../services/CreateComplimentService"


class CreateComplimentController {
    async handle(request: Request, response : Response){
        //user sender estava aqui mas agora pelo nosso middleware interceptamos o  id pelo request pelos arquivos ensure

        const {tag_id, user_receiver , message} = request.body;
        const { user_id } = request;
        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender : user_id,
            user_receiver,
            message,
        });

        return response.json(compliment);
    };
};

export { CreateComplimentController };