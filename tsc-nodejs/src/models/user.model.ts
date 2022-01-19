import { UserDocument } from 'mongo';
import  mongoose  from 'mongoose';
import bcrypt from "bcrypt"
import {config} from "../../config/defaults"

export interface UserDocument extends mongoose.UserDocument{
    email:String,
    name:String,
    password:String,
    CreatedAt:Date,
    UpdatedAt:Date;
    comparePassword(candidatePassword:String): Promise<boolean>
}

const userSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    password:{type:String,required:true}
},

{timestamps:true}
)

userSchema.pre("save",async function(next:mongoose.hookNextFunction){
    let user= this as UserDocument

    if(!user.isModified("password")) return next()
    const salt= await bcrypt.genSalt(config.saltWorkFactor)
    const hash=await bcrypt.hashSync(user.password,salt)

    user.password=hash
    return next()
})

userSchema.method.comparePassword=async function(candidatePassword:String){
const user=this as UserDocument
return bcrypt.compare(candidatePassword,user.password).catch((e)=>false);

}

const User=mongoose.model("User",userSchema)
export default User