import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagServices";

class CreateTagController {

    async handle(request:Request, response:Response){

        const { name } = request.body;

        const createTagService = new CreateTagService();

        const tag = await createTagService.execute(name);

        return response.json(tag);
        //apos o controller é necessario fazer referencia nas rotas(routes)
    }
}

export { CreateTagController }
