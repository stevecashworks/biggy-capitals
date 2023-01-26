 import mongoose from 'mongoose';
 const customerSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },password:{
        type:String,
        required:true
    },
    
    balance:{
            type:Number,
            default:0
    },
     isAdmin:{
        default: false,
        type:Boolean
    }
 },{timestamps:true})
 export default mongoose.model('users',customerSchema)