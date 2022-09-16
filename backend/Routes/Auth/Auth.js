const { Router } = require("express");
const userRouter=Router()
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userModel = require("../../Model/userModel.js")
userRouter.post('/login',async(req,res)=>{
const {email,password} = req.body
const user=await userModel.findOne({email: email})
if(!user){
    res.send("Invalid email address")
}else{
    let pass=jwt.verify(user.password,process.env.SECRET_KEY)
    if(password==pass){
      
        let token=jwt.sign(user._id.toString(),process.env.SECRET_KEY)
        res.json({token:token})
            
        }else{
            res.send({error:'incorrect password'})
        }

   
}
})

userRouter.post('/signup',async(req,res)=>{
    const{ name, email, password}=req.body
    let pass=jwt.sign(password,process.env.SECRET_KEY)

    let new_user={name,email,password:pass}
    
    let user=await userModel.create(new_user)
    user.save()
    res.send('success')
})
userRouter.post('/resetpassword',async(req, res) => {
    
    
})
module.exports = userRouter