import mongoose from "mongoose";
const studentSchema=new mongoose.Schema({
    rollNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    dateOfBirth:{
        type:Date
    },
    gender:{
        type:String,
        enum:["M","F","O"]
    },
    classId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true,
    }
},{
    timestamps:true
});
const Student=mongoose.model("Student",studentSchema);
export default Student;