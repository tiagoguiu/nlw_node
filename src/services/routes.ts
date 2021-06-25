import { Router } from "express";
import { CreateUserController} from "../controllers/CreateUserController";
import { CreateTagController } from "../controllers/CreateTagController";
import { ensureAdmin } from "../middlewares/ensureAdmins";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateComplimentController } from "../controllers/CreateComplimentController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "../controllers/ListUserSendComplimentsController";
import { ListTagsController } from "../controllers/ListTagsController";
import { ListUsersController } from "../controllers/ListUsersController";





const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();






//rotas para usuarios localhost:3000/users SEMPRE NO PLURAL
router.post("/users", createUserController.handle);
//Não preciso de req,res aqui pois dentro do meu user controller esta o request response

router.post("/tags", ensureAuthenticated,ensureAdmin ,createTagController.handle);
//rota para tags localhost:3000/tags

router.post("/login", authenticateUserController.handle);

router.post("/compliments", ensureAuthenticated ,createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated,listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated,listUserReceiveComplimentsController.handle);

router.get("/tags", ensureAuthenticated ,listTagsController.handle);
router.get("/users",ensureAuthenticated,listUsersController.handle);

export{ router };