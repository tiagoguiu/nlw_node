import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub : string;
}


export function ensureAuthenticated(request:Request,response:Response, next:NextFunction) {

    //receber o token
    const authToken = request.headers.authorization;
    
    

    //validar se o token está preenchido
    if(!authToken){
        return response.status(401).end();
        //erro 401 unauthorized
    }

    //validar se um token é valido

    const [,token] = authToken.split(" ");

    try{
        //sub está representando o id do usuario logado
        const { sub } = verify( token ,"a9113c0a725e9ffdc4f848480a7fdff8") as IPayload;
//a interface e o as payload serviram para forçar o sub ser string por user_id esperar uma string não uma func
        request.user_id = sub;
        return next();
    }catch(err){
        response.status(401).end();
    }
    
    
    
}

