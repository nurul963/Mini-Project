import Exam from '../models/Exam.js';
export const createExame=async(req,resp)=>{
    const exame=await Exam.create(req.body);
    resp.status(201).json({
        success:true,
        message:"Exam created successfully",
        data:exame
    })
}
export const getAllExames=async(req,resp)=>{
    const exames=await Exam.find();
    resp.status(200).json({
        success:true,
        count:exames.length,
        data:exames
    })
}

export const getExameById=async(req,resp)=>{
    const exame=await Exam.findById(req.params.id);
    if(!exame){
        return resp.status(404).json({
            success:false,
            message:"Exam not found"
        })
    }
    resp.status(200).json({
        success:true,
        data:exame
    })
}

export const updateExame = async (req, resp) => {
    const exame = await Exam.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );
    if (!exame) {
        return resp.status(404).json({
            success: false,
            message: "Exam not found"
        })
    }
    return resp.status(200).json({
        success: true,
        message: "Exam updated successfully",
        data: exame
    })

}
export const deleteExame = async (req, resp) => {
    const exame = await Exam.findByIdAndDelete(req.params.id);
    if (!exame) {
        return resp.status(404).json({
            success: false,
            message: "Exam not found"
        })
    }
    return resp.status(200).json({
        success: true,
        message: "Exam deleted successfully",
    })
}