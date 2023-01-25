import mongoose from 'mongoose';
const  WalletSchema=mongoose.Schema({
 coinName:{
    type:String,
    required:true
 },
 walletId:{
    type:String,
    required:true,
 }
})
export default mongoose.model('wallets', WalletSchema)