import Class from '../models/Class.js'
export const createClass=async(req,resp)=>{
    const newClass=await Class.create(req.body);
    resp.status(201).json({
        success:true,
        message:"Class created successfully",
        data:newClass
    })
}