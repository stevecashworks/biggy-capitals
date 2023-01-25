import { Router } from "express";
import { verifytoken,verifyAdmin } from "../user/verify.js";
import { getAllInvestments, getInvestment, updateInvestment, addInvestment } from "./investmentController.js";
//
const cartRoute =Router()
 cartRoute.get('/',verifyAdmin,getAllInvestments)
 cartRoute.post('/add/:id',verifytoken, addInvestment)
 cartRoute.post('/get/:id',verifytoken,getInvestment)
 cartRoute.post('/update/:id',verifytoken,updateInvestment)
 
 



export default cartRoute