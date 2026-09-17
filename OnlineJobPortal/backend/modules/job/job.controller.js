import { createJobService, getAllJobService } from "./jo.service.js";

export const createJobController=async(req,resp)=>{
    const {user_id}=req.user;
    const result=await createJobService(user_id,req.body);
    resp.status(result.statusCode).json(result);
}
export const getAllJobController=async(req,resp)=>{
    const {limit=10,offset=0}=req.query;
    const result=await getAllJobService(limit,offset);
    resp.status(result.statusCode).json(result);
}