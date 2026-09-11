import { loginService, registerService } from "./user.service.js";

export const registerController=async(req,resp)=>{
    const {full_name,email,password}=req.body;
    if(!full_name || !email || !password){
        return resp.status(400).json({
            statusCode:400,
            message:"Feild cannot be empty"
        })
    }
    const result=await registerService(req.body);
    resp.status(result.statusCode).json(result);
}
export const loginController=async(req,resp)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return resp.status(400).json({
            statusCode:400,
            message:"Email and Password can not be empty"
        })
    }
    const result=await loginService({email,password});
    resp.status(result.statusCode).json(result);
}