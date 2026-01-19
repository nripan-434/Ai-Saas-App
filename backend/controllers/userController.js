import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const userRegister =async (req,res)=>{
    try {
        const {name,email,password,role} = req.body
    if(!name||!email||!password||!role){
        return  res.status(400).json({message:"Fill All Fields"})
    }
    const exist = await userModel.findOne({email})
    if(exist){
        return res.status(409).json({message:"email already registered"})
    }
    const salt=await bcrypt.genSalt(10)
    const hashedpass= await bcrypt.hash(password,salt) 
    const user = await userModel.create({
        name,email,password:hashedpass,role
    })
    return res.status(201).json({message:"Registered successfully",user})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"server error"})
    }
    
}

export const login = async (req,res)=>{
   try {
     const {email,password}=req.body
    const exist =await userModel.findOne({email}).select("+password")
    if(!exist){
        return res.status(400).json({message:"Invalid Credentials"})
    }
    const pass=await bcrypt.compare(password,exist.password)
    if(!pass){
        return res.status(400).json({message:"Invalid Credentials"})
    }
    const token = jwt.sign({id:exist._id},process.env.SECRET_KEY)
    const currentuser={
        user:exist        
    }
    return res.status(200).json({message:"Logged in successfully",token,currentuser})
   } catch (error) {
    console.log(error)
    return res.status(500).json({message:"server error"})
   }

}