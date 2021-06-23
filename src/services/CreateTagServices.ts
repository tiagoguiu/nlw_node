import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"




class CreateTagService{
    async execute(name : string){

        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error("Nome incorreto");
        }

//SELECT * FROM TAGS WHERE NAME = 'NAME' SQL CODIGO       
        const tagAlreadyExists = await tagsRepositories.findOne({name});

        if(tagAlreadyExists){
            throw new Error("A tag já existe");
        }

        const tag = tagsRepositories.create({
            name,
        });

        await tagsRepositories.save(tag);

        return tag;
        
    }
}

export { CreateTagService }