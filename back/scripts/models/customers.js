 import mongoose from 'mongoose';
 const customerSchema=mongoose.Schema({
    email:{
        type:String,
        Required:true,
        unique:true
    },password:{
        type:String
    }, isAdmin:{
        default: false,
        type:Boolean
    }
 },{timestamps:true})
 export default mongoose.model('customers',customerSchema)