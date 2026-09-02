import app from './app.js';
import { PORT } from './util/env.js';
import connectDB from './config/db.js';
const port=PORT || 5000;
const startServer=async()=>{
    await connectDB();
    app.listen(port,()=>console.log(`http://localhost:${port}`));
}
startServer();