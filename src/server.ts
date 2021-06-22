import "reflect-metadata";
import express, { response } from "express";
//QUANDO O ARQUIVO REQUERIDO DENTRO DA PASTA É O ARQUIVO INDEX 
//NÃO É NECESSARIO DIZER QUAL ARQUIVO IMPORTAR 
import "./database"

//@types/express
const app = express();




app.listen(3000, ()=>{
    console.log("Server is running on localhost:3000");
});