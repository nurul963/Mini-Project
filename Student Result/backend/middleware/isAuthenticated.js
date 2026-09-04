import jwt from 'jsonwebtoken';
import {SECERATE_KEY} from '../util/env.js'
export const isAuthenticated=(req,resp,next)=>{
    const tokenHeader=req.headers.Authorization;
    if(!tokenHeader){
        return resp.status(401).json({
            success:false,
            message:"Token is missing"
        })
    }
    const token=tokenHeader.split(' ')[1];
    const decode=jwt.verify(token,SECERATE_KEY);
    req.user=decode;
    next();
}