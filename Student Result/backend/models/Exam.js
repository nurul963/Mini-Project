import mongoose from "mongoose";
const examSchema=new mongoose.Schema({
    examName:{
        type:String,
        required:true,
        trim:true
    },
    academicYear:{
        type:String,
        required:true,
    },
    startDate:{
        type:Date,
    },
    endDate:{
        type:Date
    }
},{timestamps:true})
const Exam=mongoose.model("Exam",examSchema);
export default Exam;