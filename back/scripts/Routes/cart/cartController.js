import createCustomError from '../../errors/customError.js';
import cartModel from '../../models/Cart.js'
import productModel from '../../models/Products.js'
 //gets all users carts 
export const getAllCarts=async(req,res,next)=>{
    try {
        const carts =await cartModel.find()
        res.status(200).json({success:true, result:carts}) 
    } catch (error) {
        next(createCustomError(500,error.message))
    }
}
 export const addToCart=async(req,res,next)=>{
const productId=req.params.id;
const userId=req.user.id
try {
     const cart=await cartModel.findOne({userId})
     console.log(cart)
     const  {products}=cart;
     

     // check if product already exists in the cart, if it does, we do not add it

     const productExists=products.some(product=>productId===product.productId)
     if(productExists){
        next(createCustomError(500,'This product is already in your cart'))
     }
     else{
        // we need to get the products price so we can add it to our cart's total;
        const thisProduct=await productModel.findById(productId)
        const updatedCart= await cartModel.findOneAndUpdate({userId:userId},{$push:{products:{productId,quantity:req.body.quantity}},$inc:{total:thisProduct.price,noOfItems:1}},{new:true})
        res.status(201).json({success:true,result:updatedCart})
      
     }
   
} catch (error) {
     next(createCustomError(500,error.message))
}

  

}
export const getCartProducts=async(req,res,next)=>{
 const userId=req.user.id;
 try {
    const cart=await cartModel.findOne({userId})
    
     const {products}=cart;
  const fetchedProduct= await Promise.all(products.map((product)=>  productModel.findById(product.productId)))
   const result= fetchedProduct.flat()   
  res.status(200).json({success:true,result}) 
 } catch (error) {
     next(createCustomError(500,error.message))
 }
  
}
export const  removefromCart=async(req,res,next)=>{
     const userId=req.user.id;
     try {
     const thisProduct=await productModel.findById(req.params.id)

    const  updatedCart=await cartModel.findOneAndUpdate({userId},{$pull:{products:{productId:req.params.id}},$inc:{total:Number(`-${thisProduct.price}`),noOfItems:-1}},{new:true})
        res.status(201).json({success:true,result:updatedCart})
     } catch (error) {
        next(createCustomError(500,error.message))
     }

}