import { Router } from "express";
import { CreateUserController} from "../controllers/CreateUserController";


const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);
//Não preciso de req,res aqui pois dentro do meu user controller esta o request response

export{ router };