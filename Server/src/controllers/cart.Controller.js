const Cart=require("../models/cartitem.moddel");
const express=require("express");

const router =express.Router();

router.get("/",async(req,res)=>{
    try{
        return res.status(200).send("data received")

    }catch(er){

        return res.status(500).send({error:er})
    }
})


module.exports=router;