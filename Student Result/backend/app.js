import express from 'express';
import cors from 'cors';
import notFound from './middleware/notFound.js'
import errorHandler from './middleware/errorHandler.js'
import classRoutes from './routes/class.routes.js';
import studentRoute from './routes/student.routes.js';
import subjectRoute from './routes/subject.routes.js';
import examRoute from './routes/exam.routes.js';
import resultRoute from './routes/result.routes.js'
const app=express();
app.use(express.json());
app.use(cors());
app.get("/",(req,resp)=>{
    resp.json({
        success:true,
        message:"Api is working"
    })
})
app.use("/api/student",studentRoute)
app.use("/api/classes",classRoutes);
app.use("/api/subject",subjectRoute);
app.use("/api/exam",examRoute)
app.use("/api/result",resultRoute);
app.use(notFound);
app.use(errorHandler);
export default app;