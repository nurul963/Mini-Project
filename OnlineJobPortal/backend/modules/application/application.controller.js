import { applyJobService, getAppliedJobService } from "./application.service.js";

export const applyJobController=async(req,resp)=>{
    const {job_id}=req.body;
    const {user_id}=req.user;
    const result=await applyJobService(job_id,user_id);
    return resp.status(result.statusCode).json(result);
}
export const getApplicationController=async(req,resp)=>{
    const {user_id}=req.user;
    const result=await getAppliedJobService(user_id);
    return resp.status(result.statusCode).json(result);
}