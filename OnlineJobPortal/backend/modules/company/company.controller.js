import { addCompnayService } from "./company.service.js";

export const addCompnayController=async(req,resp)=>{
    const logo=req.file;
    const data=req?.body?.data;
    const user_id=req?.user?.user_id
    const role=req?.user?.user_type;
    const result=await addCompnayService(user_id,logo,data,role);
    resp.status(result.statusCode).json(result);
}