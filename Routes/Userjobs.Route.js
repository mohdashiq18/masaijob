const express = require("express");
const userjobRoute = express.Router();
const { UserjobModule } = require("../Models/Userjob.Model");

userjobRoute.get("/applied",async(req,res)=>{
    try{
       let data=await UserjobModule.find()
       res.send(data)
    }
    catch(err){
       res.send(err)
    }
})
userjobRoute.post("/apply",async(req,res)=>{
    let payoad=req.body
    try{
       let newJob = new UserjobModule(payoad)
       await newJob.save()
       res.send(newJob) 
    }
    catch{
       res.send("err")
    }
})

userjobRoute.delete("/deleteapplied/:id",async(req,res)=>{
    let id=req.params.id
    try{
        let del=await UserjobModule.findByIdAndDelete({"_id":id})
        res.send(del)
    }
    catch(err){
      res.send(err)
    }
})

module.exports = {
  userjobRoute,
};