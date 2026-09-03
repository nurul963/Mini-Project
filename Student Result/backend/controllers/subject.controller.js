import Subject from '../models/Subject.js';
export const createSubject=async(req,resp)=>{
    const data=req.body;
    if(data.length > 1){
        const subjects=await Subject.insertMany(data);
        return resp.status(201).json({
            success:true,
            message:"All Subject created successfully",
            data:subjects
        })
    }
    const subject=await Subject.create(data);
    return resp.status(201).json({
            success:true,
            message:"Subject created successfully",
            data:subject
    })
}
export const getAllSubjects=async(req,resp)=>{
    const subjects=await Subject.find()
                                .populate("classId");
    resp.status(200).json({
        success:true,
        count:subjects.length,
        data:subjects
    })
}
export const getSubjectById=async(req,resp)=>{
    const subject=await Subject.findById(req.params.id).populate("classId");
    if(!subject){
        return resp.status(404).json({
            success:false,
            message:"Subject not found"
        })
    }
    resp.status(200).json({
        success:true,
        data:subject
    })
}

export const updateSubject = async (req, resp) => {
    const subject = await Subject.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );
    if (!subject) {
        return resp.status(404).json({
            success: false,
            message: "Subject not found"
        })
    }
    return resp.status(200).json({
        success: true,
        message: "Student updated successfully",
        data: subject
    })

}
export const deleteSubject = async (req, resp) => {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) {
        return resp.status(404).json({
            success: false,
            message: "Subject not found"
        })
    }
    return resp.status(200).json({
        success: true,
        message: "Subject deleted successfully",
    })
}
