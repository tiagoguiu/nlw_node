import "reflect-metadata";
import express, { NextFunction, Response, Request } from "express";
//QUANDO O ARQUIVO REQUERIDO DENTRO DA PASTA É O ARQUIVO INDEX 
//NÃO É NECESSARIO DIZER QUAL ARQUIVO IMPORTAR 
import "./database";
import "express-async-errors";
import { router } from "./services/routes";
import { RepositoryNotTreeError } from "typeorm";


//@types/express
const app = express();

//O express precisa entender que o formato utilizado é o json
app.use(express.json());


//middleware para inserir as rotas dentro do express
app.use(router);

//com este middleware vai ser possivel utilizar o next para dizer se um
//usuario esta autenticado para proseguir na rota
app.use((err:Error, request:Request, response:Response, next:NextFunction)=>{

    if(err instanceof Error){
        return response.status(400).json({
            error : err.message
        })
    }
    return response.status(500).json({
        status : "error",
        message : "Erro interno do server"
    })
});


app.listen(3000, ()=>{
    console.log("O servidor http está rodando em localhost:3000");
});