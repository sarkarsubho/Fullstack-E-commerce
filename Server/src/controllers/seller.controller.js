const Seller =require("../models/seller.model");
const express=require("express");

const router=express.Router();
router.get("/",async(req,res)=>{
    try{
        return res.status(200).send("data received")

    }catch(er){

        return res.status(500).send({error:er})
    }
})
router.post("/create", async (req, res) => {
    try {
      let seller =await Seller.create(req.body);
      console.log(seller)
      return res.status(200).send(seller);
    } catch (er) {
      console.log(er)
      return res.status(500).send({ error: er });
    }
  });

  router.get("/",async(req,res)=>{
    
  })
module.exports=router;