import mongoose from 'mongoose';

const  cartSchema= mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    investments:[
        {
            status:{
                type:String,
                default:"Pending"

            },
            proof:{
                type:String,
                required:true,
            },
            amount:{type:Number},


        }
    ],
    noOfItems:{type:Number,default:0},
    total:{
        type:Number,
        default:0
    }
    
},{timestamps:true})
export default mongoose.model('Investment',cartSchema);