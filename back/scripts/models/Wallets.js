import mongoose from 'mongoose';
const  WalletSchema=mongoose.Schema({
 btc:{type:String,default:"No walletId for this coin"},
 eth:{type:String,default:"No walletId for this coin"},
 liteCoin:{type:String,default:"No walletId for this coin"}

 
})
export default mongoose.model('wallets', WalletSchema)