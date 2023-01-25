import createCustomError from '../../errors/customError.js';
import investmentModel from '../../models/investment.js';

 //gets all users carts 
export const getAllInvestments=async(req,res,next)=>{
    try {
        const carts =await investModel.find()
        res.status(200).json({success:true, result:carts}) 
    } catch (error) {
        next(createCustomError(500,error.message))
    }
}
 export const addInvestment=async(req,res,next)=>{
  const  amount=req.body.amount;
    const proof=req.body.proof;

const userId=req.user.id
try {
     const cart=await investmentModel.create({amount,proof,userId})
     console.log(cart)
     const  {products}=cart;
     

     // check if product already exists in the cart, if it does, we do not add it

     
} catch (error) {
     next(createCustomError(500,error.message))
}

  

}
export const getInvestment=async(req,res,next)=>{
 const userId=req.user.id;
 try {
    const investments=await investmentModel.findOne({userId})
    
     .status(200).json({success:true,result:investments.investments}) 
 } catch (error) {
     next(createCustomError(500,error.message))
 }
  
}
export const  updateInvestment=async(req,res,next)=>{
     const userId=req.user.id;
     try {
         const newInvestment= await investmentModel.findOneAndUpdate({userId},{$set:req.body},{new:true})
    
        res.status(201).json({success:true,result:newInvestment})
     } catch (error) {
        next(createCustomError(500,error.message))
     }

}