import { Router } from "express";
import { CreateUserController} from "../controllers/CreateUserController";
import { CreateTagController } from "../controllers/CreateTagController";
import { ensureAdmin } from "../middlewares/ensureAdmins";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateComplimentController } from "../controllers/CreateComplimentController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

//rotas para usuarios localhost:3000/users SEMPRE NO PLURAL
router.post("/users", createUserController.handle);
//Não preciso de req,res aqui pois dentro do meu user controller esta o request response

router.post("/tags", ensureAuthenticated,ensureAdmin ,createTagController.handle);
//rota para tags localhost:3000/tags

router.post("/login", authenticateUserController.handle);

router.post("/compliments", ensureAuthenticated ,createComplimentController.handle);


export{ router };