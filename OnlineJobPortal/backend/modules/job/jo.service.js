import response from '../../utils/response.js';
import {Application, Company, Job, JobCategory} from '../../models/index.js';
export const createJobService=async(user_id,data)=>{
    try {
        if(data.length > 1){
            const jobs=data.map((item)=>{
                return {...item,recruiter_id:user_id}
            });
            await Job.bulkCreate(jobs);
            return response(201,"Bulk jobs created");
        }
        const {company_id}=data;
        if(!company_id){
           return response(400,"Company is missing");   
        }
        data.recruiter_id=user_id;
        const job=await Job.create(data);
        return response(201,"Job is created",job);  
    } catch (error) {
       return response(500,error.message);  
    }
}
export const getAllJobService=async(id,limit,offset)=>{
    try {
        const {count,rows}=await Job.findAndCountAll({
            include:[
                {model:Company,required:true},
                {model:JobCategory,required:false},
                {
                    model:Application,required:false,
                    where:{
                        candidate_id:id
                    }

                }
            ],
            offset:Number(offset),
            limit:Number(limit)
        });
        return response(200,"Job list",{count,rows});  
    } catch (error) {
        return response(500,error.message);  
    }
}
export const getJobByIdService=async(id,job_id)=>{
    try {
        const job=await Job.findByPk(job_id,{
            include:[
                {model:Company,required:true},
                {model:JobCategory,required:false},
                {
                    model:Application,required:false,
                    where:{
                        candidate_id:id
                    }

                }
            ]
        });
        return response(200,"fetched job",job);  
    } catch (error) {
        return response(500,error.message);  
    }
}