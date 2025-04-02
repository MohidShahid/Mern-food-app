import express , {Request , Response} from "express";
import mongoose from "mongoose";
import 'dotenv/config'
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then((res)=>console.log("Database Connected"));
const app = express();
app.use(express.json())
app.get("/test" , (req : Request , res : Response)=>{
    res.status(200).json({message : "Hello World!"})
})


app.listen(7000 , ()=>{
    console.log("Server is running on PORT : 7000")
})