import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["ADMIN","STUDENT","TEACHER"],
        default:"STUDENT"
    }

},
{
    timestamps:true
}
);
const User=mongoose.model("User",userSchema);
export default User;