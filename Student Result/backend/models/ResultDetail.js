import mongoose from "mongoose";
const resultDetailsSchema=new mongoose.Schema({
    resultId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Result",
        required:true
    },
    subjectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },
    marksObtained:{
        type:Number,
        required:true,
        min:0
    },
    grade:{
        type:String
    }

},{timestamps:true});
resultDetailsSchema.index(
    {
        resultId:1,
        subjectId:1
    },{unique:true}
);
const ResultDetail=mongoose.model("ResultDetail",resultDetailsSchema);
export default ResultDetail;