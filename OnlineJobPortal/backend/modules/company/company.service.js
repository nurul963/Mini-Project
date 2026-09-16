import { uploadCloudinary } from "../../config/cloudinary.js";
import response  from "../../utils/response.js"
import {Company, Recruiter} from '../../models/index.js';
export const addCompnayService=async(user_id,logo,data,role)=>{
    try {
        if(!logo){
            return response(400,"Logo is required");
        }
        const {company_name,
            industry,company_size,
            company_website,
            about_company
        }=data;
        if(!company_name || !company_size
            || !industry || !company_website
            || !about_company
        ){
            return response(400,"All feilds are mandatory");
        }
        const uploadlogo=await new Promise((resolve,reject)=>{
        const stream=uploadCloudinary
        .uploader
        .upload_stream(
            {
                folder:'companies'
            },
            (error,result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            }
        )
        stream.end(logo.buffer);
    });
    const company=await Company.create(
        {
            company_name,
            industry,
            company_size,
            company_website,
            about_company,
            company_log:uploadlogo.secure_url,
            public_key:uploadlogo.public_id
        }
    );
    if(role==="RECRUITER"){
        await Recruiter.create({
            recruiter_id:user_id,
            company_id:company.company_id
        })
    }
    return response(201,"Company Created Successfully",company);
    } catch (error) {
       return response(500,error.message);
    }
}