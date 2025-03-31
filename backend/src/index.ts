import express , {Request , Response} from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json())
app.get("/test" , (req : Request , res : Response)=>{
    res.status(200).json({message : "Hello World!"})
})


app.listen(7000 , ()=>{
    console.log("Server is running on PORT : 7000")
})