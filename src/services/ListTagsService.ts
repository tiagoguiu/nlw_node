import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain }from  "class-transformer";


class ListTagsService {

    async execute(){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();

        return classToPlain(tags);
/**envez de apenas retornar tags, como a gente alterou a entidade tag
 * a classToPlain vai transformar e adicionar a nova função/propriedade
 * que sobrescrevemos dentro de Tag
*/
    }
}

export { ListTagsService }