import jwt from 'jsonwebtoken'
import {SECRET_KEY} from '../config/env.js'
import response from '../utils/response.js'
export const isAuthenticated=(req,resp,next)=>{
    try {
        const token=req?.headers
        ?.authorization?.split(' ')[1] || null;
        if(!token){
            const result=response(400,"Token is missing");
            return resp.status(result.statusCode).json(result);
        }
        const decode=jwt.verify(token,SECRET_KEY);
        req.user=decode;
        next();
    } catch (error) {
        const result=response(500,error.message);
        return resp.status(result.statusCode).json(result); 
    }
}