import response  from "../../utils/response.js"
import { JobCategory} from '../../models/index.js';
export const addCategoryService=async(data)=>{
    try {
        if(data.length>1){
            const categories=await JobCategory.bulkCreate(data);
            return response(201,"categories Created Successfully",categories);
        }
        const category=await JobCategory.create(data);
    return response(201,"category Created Successfully",category);
    } catch (error) {
       return response(500,error.message);
    }
}
export const getAllCategoryService=async()=>{
    try {
        const result=await JobCategory.findAll();
        return response(200,"Category fetched Successfully",result);
    } catch (error) {
       return response(500,error.message); 
    }
}
