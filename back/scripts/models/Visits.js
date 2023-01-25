import mongoose from 'mongoose';
 const VisitSchema= mongoose.Schema({
 no:{ type:Number,
default:0,

},
 })
 export default mongoose.model('visits', VisitSchema)