import Class from '../models/Class.js'
export const createClass = async (req, resp) => {
    const newClass = await Class.create(req.body);
    resp.status(201).json({
        success: true,
        message: "Class created successfully",
        data: newClass
    })
}
//getAllClass
export const getAllClasses = async (req, resp) => {
    const classes = await Class.find();
    resp.status(200).json({
        success: true,
        count: classes.length,
        data: classes
    })
}
//getClassById
export const getClassById = async (req, resp) => {
    const newClass = await Class.findById(req.params.id);
    if (!newClass) {
        return resp.status(404).json({
            success: false,
            message: "Class not found"
        })
    }
    resp.status(200).json({
        success: true,
        data: newClass
    })
}
//updateClass
export const updateClass=async(req,resp)=>{
    const newClass=await Class.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true,runValidators:true}
    )
    if(!newClass){
       return resp.status(404).json({
            success: false,
            message: "Class not found"
        }) 
    }
    resp.status(200).json({
        success: true,
        data: newClass
    })
}
//deleteClass
export const deleteClass=async(req,resp)=>{
    const newClass=await Class.findByIdAndDelete(req.params.id);
    if(!newClass){
       return resp.status(404).json({
            success: false,
            message: "Class not found"
        }) 
    }
    resp.status(200).json({
        success: true,
        message:"Class deleted successfully"
    })
}