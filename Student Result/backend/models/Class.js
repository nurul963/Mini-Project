import mongoose from "mongoose";
const classSchema=new mongoose.Schema({
    className:{
        type:String,
        required:true,
        trim:true
    },
    section:{
        type:String,
        required:true,
        trim:true
    },
    academicYear:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
}
)
const Class=mongoose.model("Class",classSchema);
export default Class;