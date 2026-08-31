import express from 'express';
import { PORT } from './utils/env.js';
import authRoute from './routes/authRoutes.js';
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const port=PORT;
app.use("/api/auth",authRoute);
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})