const e = require("express")
const {UsersModule}=require("../Models/User.Model")

const login=async (req,res,next)=>{
    const {email,password}=req.body
    
        if(req.method=="POST" && req.url=="/login"){
            const data=await UsersModule.find({email})
            if(data.length>0){
                next()
            }else{
               
                res.send("err")
            }
        }else{ 
            next()
        }
        

    
}
module.exports={

    login
}