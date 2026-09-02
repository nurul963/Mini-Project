import mongoose from "mongoose";
const resultSchema=new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    classId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    examId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Exam",
        required:true
    },
    totalMarksObtained:{
        type:Number,
        default:0
    },
    percentage:{
        type:Number,
        default:0
    },
    grade:{
        type:String,
        default:"F"
    },
    resultDate:{
        type:Date,
        default:Date.now
    },
},{timestamps:true});
resultSchema.index(
    {
        studentId:1,
        examId:1
    },
    {
        unique:true
    }
);
const Result=mongoose.model("Result",resultSchema);
export default Result;