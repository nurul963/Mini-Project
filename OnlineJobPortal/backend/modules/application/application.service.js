import { Op } from "sequelize";
import { Application, Company, Job, JobCategory } from "../../models/index.js";
import response from "../../utils/response.js";

export const applyJobService=async(job_id,candidate_id)=>{
    try {
        let application=await Application.findOne({
            where:{
                [Op.and]:[{job_id:job_id},{candidate_id:candidate_id}]
            }
        });
        if(application){
            return response(400,"You have already applied for this job")
        }
        application=await Application.create({job_id,candidate_id});
        return response(201,"Job applied successfully",application);
    } catch (error) {
       return response(500,error.message); 
    }
}
export const getAppliedJobService=async(candidate_id)=>{
    try {
        const application=await Application.findAll({
            where:{
                candidate_id:candidate_id
            },
            include:{
                model:Job,
                include:[{model:Company},{model:JobCategory}]
            }
        });
        return response(200,"fetched application",application);
    } catch (error) {
        return response(500,error.message);  
    }
}
