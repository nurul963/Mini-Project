import express from "express";
import {PORT} from './config/env.js'
import cors from 'cors'
import connectDB,{sequelize} from "./config/db.js";
import './models/index.js';
import mainRoute from './routes/mainRoutes.js';
const app=express();
const corsOption={
    origin:"*",
    credentials:true
}
app.use(express.json());
app.use(cors(corsOption));
app.use("/api",mainRoute);
const startServer=async()=>{
    app.listen(PORT,async()=>{
        await connectDB();
        console.log(`http://localhost:${PORT}`);
    })
    await sequelize.sync()
}
startServer();