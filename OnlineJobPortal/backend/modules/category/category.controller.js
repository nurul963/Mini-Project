import { addCategoryService, getAllCategoryService } from "./category.service.js";
export const addCategoryController=async(req,resp)=>{
    const result=await addCategoryService(req.body);
    resp.status(result.statusCode).json(result);
}
export const getAllCategoryController=async(req,resp)=>{
    const result=await getAllCategoryService();
    resp.status(result.statusCode).json(result);
}