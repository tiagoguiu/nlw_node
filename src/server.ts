import express, { response } from "express";

//@types/express
const app = express();
/**
 * GET => BUSCAR UMA INFORMAÇÃO NA API
 * POST => INSERIR UMA INFORMAÇÃO NA API (ENVIAR)
 * PUT => ALTERAR UMA INFORMAÇÃO
 * DELETE => REMOVER UMA INFORMAÇÃO
 * PATCH => ALTERAR UMA INFORMAÇÃO ESPECIFICA
 */

//primeira rota
app.get("/teste", (req,res)=>{
    //request => entrando
    //response => saindo
    return res.send("ola"); // o return é importante pra nao ficar em loop
});

app.post("teste-post",(req,res)=>{
    res.send("metodo post feito e funcionando");
});

app.listen(3000, ()=>{
    console.log("Server is running on localhost:3000");
});