import Result from "../models/Result.js";
import ResultDetail from "../models/ResultDetail.js";
import Subject from "../models/Subject.js";

const calculateGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    if (percentage >= 40) return "E";
    return "F";
}
export const createResult = async (req, resp) => {
    const { studentId, classId, examId, subjects } = req.body;
    if (!subjects || subjects.length === 0) {
        return resp.status(400).json({
            success: false,
            message: "At least one subject is required"
        })
    }
    let totalMarks = 0;
    let totalMarksObtained = 0;
    const details = [];
    for (const item of subjects) {
        const subject = await Subject.findById(item.subjectId);
        if (!subject) {
            return resp.status(404).json({
                success: false,
                message: `Subject not found:${item.subjectId}`
            })
        }
        totalMarks += subject.totalMarks;
        totalMarksObtained += item.marksObtained;
        const percentage = (item.marksObtained / subject.totalMarks) * 100;
        details.push({
            subjectId: item.subjectId,
            marksObtained: item.marksObtained,
            grade: calculateGrade(percentage)
        });
    }
    const percentage = (totalMarksObtained / totalMarks) * 100;
    const grade = calculateGrade(percentage);
    const result = await Result.create({
        studentId,
        classId,
        examId,
        totalMarksObtained,
        percentage: Number(percentage.toFixed(2)),
        grade
    });
    const resultDetail = details.map((detail) => (
        {
            resultId: result._id,
            ...detail
        }
    ))
    await ResultDetail.insertMany(resultDetail);
    resp.status(201).json({
        success:true,
        message:"Result is created"
    });
}
export const getAllResults=async(req,resp)=>{
    const results=await Result.find()
                    .populate("studentId")
                    .populate("classId")
                    .populate("examId")
    resp.status(200).json({
        success:true,
        count:results.length,
        data:results
    })
}
export const getResultById=async(req,resp)=>{
    const result=await Result.findById(req.params.id)
                    .populate("studentId")
                    .populate("classId")
                    .populate("examId")
    if(!result){
        return resp.status(404).json({
            success:false,
            message:"Result not found"
        })
    }
    const details=await ResultDetail.find({
        resultId:result._id
    }).populate("subjectId");
    resp.status(200).json({
        success:true,
        data:{
            result,
            subjects:details
        }
    })
}
export const getStudentResult=async(req,resp)=>{
    const {studentId}=req.params;
    const results=await Result.find({studentId})
                             .populate("studentId")
                             .populate("classId")
                             .populate("examId")
    if(results.length===0){
        return resp.status(404).json({
            success:false,
            message:"No result found for this student"
        })
    }
    const finalResults=[]
    for(const result of results){
        const details=await ResultDetail.find({
            resultId:result._id
        }).populate("subjectId");
        finalResults.push({
            result,
            subjects:details
        })
    }
    resp.status(200).json({
        success:true,
        data:finalResults
    })


}
export const deleteResult=async(req,resp)=>{
    const result=await Result.findByIdAndDelete(req.params.id);
    if(!result){
        return resp.status(404).json({
            success:false,
            message:"Result not found"
        })
    }
    await ResultDetail.deleteMany({
        resultId:result._id
    });
    resp.status(200).json({
        success:true,
        message:"Result deleted successfully"
    });
}