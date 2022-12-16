import fetch from "node-fetch";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export class User{
    static Userlogin=async (req,res)=>{
        const apiResp= await axios.post(`${process.env.JAVA_BACKEND}/login`, req.body)
        res.send(apiResp.data)        
   }
   static UserSignup=async (req,res)=>{
        const apiResp= await axios.post(`${process.env.JAVA_BACKEND}/Signup`, req.body)
        res.send(apiResp.data)        
   }
   static AllUser=async (req,res)=>{
        const apiResp= await axios.post(`${process.env.JAVA_BACKEND}/UserList`, req.body)
        console.log(apiResp)

        res.send(apiResp.data)        
   }
   static Allsheetdata=async (req,res)=>{

        const apiResp= await axios.post(`${process.env.JAVA_BACKEND}/workbookacess`, req.body)
        res.send(apiResp.data)        
   }
  
}