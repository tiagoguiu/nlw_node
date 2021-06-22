import "reflect-metadata";
import express, { response } from "express";
//QUANDO O ARQUIVO REQUERIDO DENTRO DA PASTA É O ARQUIVO INDEX 
//NÃO É NECESSARIO DIZER QUAL ARQUIVO IMPORTAR 
import "./database"

import { router } from "./services/routes";

//@types/express
const app = express();

//O express precisa entender que o formato utilizado é o json
app.use(express.json());


//middleware para inserir as rotas dentro do express
app.use(router); 


app.listen(3000, ()=>{
    console.log("O servidor http está rodando em localhost:3000");
});