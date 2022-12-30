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
router.get("/seller",async(req,res)=>{
    try{
        return res.status(200).send("data received")

    }catch(er){

        return res.status(500).send({error:er})
    }
});

router.get("/user/:id",async(req,res)=>{
    try{
        let data=await Cart.find({customerId:req.params.id})
        return res.status(200).send(data)

    }catch(er){

        return res.status(500).send({error:er})
    }
})

router.post("/create",async (req, res) => {
    try {
      let product =await Cart.create(req.body);
      console.log(product)
      return res.status(200).send(product);
    } catch (er) {
      console.log(er)
      return res.status(500).send({ error: er });
    }
  });

module.exports=router;