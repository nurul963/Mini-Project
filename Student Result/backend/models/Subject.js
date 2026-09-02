import mongoose from "mongoose";
const subjectSchema=new mongoose.Schema({
    subjectName:{
        type:String,
        required:true,
        trim:true
    },
    subjectCode:{
        type:String,
        required:true,
        unique:true,
        uppercase:true,
        trim:true
    },
    totalMarks:{
        type:Number,
        required:true,
        default:100
    },
    isActive:{
        type:Boolean,
        default:true
    },
    classId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    }
},{timestamps:true})
const Subject=mongoose.model("Subject",subjectSchema);
export default Subject;