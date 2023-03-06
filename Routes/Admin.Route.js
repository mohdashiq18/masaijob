const express = require("express");
const adminRoute = express.Router();
const { AdminModule } = require("../Models/Admin.Model");

adminRoute.get("/jobs",async(req,res)=>{
    try{
       let data=await AdminModule.find()
       res.send(data)
    }
    catch(err){
       res.send(err)
    }
})
adminRoute.post("/addjob",async(req,res)=>{
  let payoad=req.body
  try{
     let newJob = new AdminModule(payoad)
     await newJob.save()
     res.send(newJob) 
  }
  catch(err){
     res.send(err)
  }
})
adminRoute.patch("/edit/:id",async(req,res)=>{
    let payload=req.body
    let id=req.params.id
    try{
       let edit=await AdminModule.findByIdAndUpdate({"_id":id},payload)
       res.send(edit)

    }
    catch{
      res.send("err")
    }
})
adminRoute.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    console.log(id)
    try{
        await AdminModule.findByIdAndDelete({"_id":id})
        res.send("success")
    }
    catch(err){
      res.send(err)
    }
})

module.exports = {
  adminRoute,
};