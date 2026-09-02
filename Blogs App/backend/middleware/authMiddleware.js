import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../utils/env.js'
export const authenticate=(req,resp,next)=>{
    try {
        const authHeader=req.headers.authorization || null;
        if(!authHeader){
           return resp.status(401).json({
                success:false,
                message:"Authentication required"
            })  
        }
        const token=authHeader.split(" ")[1];
        const decode=jwt.verify(token,JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
       return resp.status(401).json({
        success:false,
        message:"Invalid or expired token"
       }) 
    }
}