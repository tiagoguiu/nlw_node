import { Router } from "express";
import { CreateUserController} from "../controllers/CreateUserController";
import { CreateTagController } from "../controllers/CreateTagController";
import { ensureAdmin } from "../middlewares/ensureAdmins";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

//rotas para usuarios localhost:3000/users SEMPRE NO PLURAL
router.post("/users", createUserController.handle);
//Não preciso de req,res aqui pois dentro do meu user controller esta o request response

router.post("/tags", ensureAdmin ,createTagController.handle);
//rota para tags localhost:3000/tags


export{ router };