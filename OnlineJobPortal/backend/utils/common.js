import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/env.js';
import multer from 'multer';
export const hashPassword=async(password)=>{
    const hashedPassword=await bcrypt.hash(password,10);
    return hashedPassword;
}
export const generateToken=(data,expire)=>{
    const token=jwt.sign(data,SECRET_KEY,{expiresIn:expire});
    return token;
}
export const upload=multer({storage:multer.memoryStorage()});