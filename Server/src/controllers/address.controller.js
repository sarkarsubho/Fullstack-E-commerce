const express =require("express");
const router=express.Router();

const Address=require("../models/address.model");

router.get("/",async(req,res)=>{
   try{
     return res.status(200).send("ok")
   }catch(er){
    return res.status(500).send({error:er})
   }
})