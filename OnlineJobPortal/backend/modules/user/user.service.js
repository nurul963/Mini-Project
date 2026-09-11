import {User} from '../../models/index.js';
import { generateToken } from '../../utils/common.js';
import response from '../../utils/response.js';
import bcrypt from 'bcrypt';
export const registerService=async(data)=>{
   try {
        const {email}=data;
        const user=await User.findOne({ where: { email:email } });
        if(user){
           return response(400,"User already exsist"); 
        }
        const newUser=await User.create(data);
        if(newUser.user_type==="ADMIN"){
          newUser.status="ACTIVE";
          await newUser.save();
        }
        return response(201,"Account created successfully",newUser);
   } catch (error) {
        return response(500,error.message);
   }
}
export const loginService=async({email,password})=>{
   try {
      const user=await User.findOne({ where: { email:email } });
      if(!user){
         return response(404,"User not registered");
      }
      const isMatched=await bcrypt.compare(user.password,password);
      if(isMatched){
         return response(400,"Invalid Credential");
      }
      if(user.status!=="ACTIVE"){
         return response(400,`Your Account is ${user.status}`);
      }
      const token=generateToken({user_id:user.user_id,user_type:user.user_type},'2d');
      return response(200,"Login success", {
         token,
         user_id:user.user_id,
         full_name:user.full_name,
         email:user.email,
         phone:user.phone,
         user_type:user.user_type,
         status:user.status,
         createdAt:user.createdAt
      })

   } catch (error) {
      return response(500,error.message);
   }
}