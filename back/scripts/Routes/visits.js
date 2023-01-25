import Visits from "../models/Visits.js";
import express from "express";
 const addVisits =async()=>{
try{
    const added=  await Visits.findOneAndUpdate({},{$inc:{no:1}})
 res.status(201).json({success:true,result:added})
}
catch(err){
    res.status(500).json({success:false,result:err.message})
}

 }
 const visitRoute=express.Router()
 visitRoute.get('/',addVisits)

 export default visitRoute