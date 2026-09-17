import { Company } from "../../models/index.js";
import { addCompnayService, getAllCompanyService, getCompanyByRecruiterIdService } from "./company.service.js";

export const addCompnayController=async(req,resp)=>{
    const logo=req.file;
    const data=req?.body?.data;
    const user_id=req?.user?.user_id
    const role=req?.user?.user_type;
    const result=await addCompnayService(user_id,logo,JSON.parse(data),role);
    resp.status(result.statusCode).json(result);
}
export const getAllCompanyController=async(req,resp)=>{
    const result=await getAllCompanyService();
    resp.status(result.statusCode).json(result);
}
export const getCompanyByRecruiterIdController=async(req,resp)=>{
    const {user_id,user_type}=req.user;
    const result=await getCompanyByRecruiterIdService(user_id,user_type);
    resp.status(result.statusCode).json(result);
}
// only for testing
export const createBulkCompany=async(req,resp)=>{
    const data=req.body;
    if(data.length > 1){
        await Company.bulkCreate(data);
        return resp.status(201).json({
            statusCode:201,
            message:"Bulk company created"
        })
    }
    return resp.status(400).json({
        statusCode:400,
        message:"Only for bulk create"
    })
}