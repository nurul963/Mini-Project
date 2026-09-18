import { createJobService, getAllJobService, getJobByIdService } from "./jo.service.js";

export const createJobController=async(req,resp)=>{
    const {user_id}=req.user;
    const result=await createJobService(user_id,req.body);
    resp.status(result.statusCode).json(result);
}
export const getAllJobController=async(req,resp)=>{
    const {limit=10,offset=0}=req.query;
    const {user_id}=req.user;
    const result=await getAllJobService(user_id,limit,offset);
    resp.status(result.statusCode).json(result);
}
export const getJobByIdController=async(req,resp)=>{
    const {job_id}=req.params;
    const {user_id}=req.user;
    const result=await getJobByIdService(user_id,job_id);
    resp.status(result.statusCode).json(result);
}