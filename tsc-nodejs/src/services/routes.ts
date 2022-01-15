import { Express,Request,Response } from "express";

export default function(app:Express){
    app.get("/healthCheck",(req:Request,res:Response)=>{
       return res.send("Welcome to ts and node js");
    })
}