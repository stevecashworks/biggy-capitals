import Wallets from "../models/Wallets.js";
import express  from "express";
import { verifyAdmin } from "./user/verify.js";
 const  editWallet=async(req,res)=>{
    console.log('hello')
 try {
     const  updated=await Wallets.findOneAndUpdate({},{$set:req.body})
     res.status(200).json({success:true,result:updated})
 } catch (error) {
    
 }
 }
 const getWallets=async(req,res)=>{

     try {
         const wallets= await Wallets.findOne({})
         
         res.status(200).json({success:true, result:wallets})

     } catch (error) {
         res.status(500).json({success:false,result:error.message})
     }
 }
  const walletRoute=express.Router()
  walletRoute.post("/edit",editWallet)
  walletRoute.get("/",getWallets)
  export default walletRoute