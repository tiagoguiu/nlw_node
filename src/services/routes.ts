import { Router } from "express";
import { CreateUserController} from "../controllers/CreateUserController";
import { CreateTagController } from "../controllers/CreateTagController";
import { ensureAdmin } from "../middlewares/ensureAdmins";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

//rotas para usuarios localhost:3000/users SEMPRE NO PLURAL
router.post("/users", createUserController.handle);
//Não preciso de req,res aqui pois dentro do meu user controller esta o request response

router.post("/tags", ensureAdmin ,createTagController.handle);
//rota para tags localhost:3000/tags

router.post("/login", authenticateUserController.handle);


export{ router };