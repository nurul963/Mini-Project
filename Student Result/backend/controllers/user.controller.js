import User from '../models/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { SECERATE_KEY } from '../util/env.js';
export const createUser=async(req,resp)=>{
    const data=req.body;
    if(data.length > 1){
        const newData=[];
        data.forEach(async(item)=>{
            const hashPassword=await bcrypt.hash(item.password,10);
            newData.push({
                ...item,
                password:hashPassword
            })
        });
        const users=await User.insertMany(newData);
        return resp.status(201).json({
            success:true,
            message:"All user created successfully",
            data:users
        })
    }
    const hashPassword=await bcrypt.hash(data.password,10); 
    const user=await User.create({
        ...data,
        password:hashPassword
    });
    return resp.status(201).json({
            success:true,
            message:"User created successfully",
            data:user
    })
}
export const getAllUsers=async(req,resp)=>{
    const users=await User.find()
    resp.status(200).json({
        success:true,
        count:users.length,
        data:users
    })
}
export const getUserById=async(req,resp)=>{
    const user=await User.findById(req.params.id);
    if(!user){
        return resp.status(404).json({
            success:false,
            message:"User not found"
        })
    }
    resp.status(200).json({
        success:true,
        data:user
    })
}

export const updateUser = async (req, resp) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );
    if (!user) {
        return resp.status(404).json({
            success: false,
            message: "User not found"
        })
    }
    return resp.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user
    })

}
export const deleteUser = async (req, resp) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        return resp.status(404).json({
            success: false,
            message: "Subject not found"
        })
    }   
    return resp.status(200).json({
        success: true,
        message: "Subject deleted successfully",
    })
}
export const login=async(req,resp)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return resp.status(400).json({
            success:false,
            message:"User not registered"
        })
    }
    const isMatched=await bcrypt.compare(password,user.password);
    if(!isMatched){
        return resp.status(400).json({
            success:false,
            message:"Invalid email or password"
        })
    }
    
    const token=jwt.sign(
        {
            id:user._id,
            role:user.role
        },
        SECERATE_KEY,
        {
            expiresIn:'1d'
        }
    );
    resp.status(200).json({
        success:true,
        message:"Login success",
        token,
        data:{
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        }
    })
}