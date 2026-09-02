import express from 'express';
import cors from 'cors';
import notFound from './middleware/notFound.js'
import errorHandler from './middleware/errorHandler.js'
import classRoutes from './routes/class.routes.js';
const app=express();
app.use(express.json());
app.use(cors());
app.get("/",(req,resp)=>{
    resp.json({
        success:true,
        message:"Api is working"
    })
})
app.use("/api/classes",classRoutes);
app.use(notFound);
app.use(errorHandler);
export default app;