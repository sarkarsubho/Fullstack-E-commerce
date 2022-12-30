const Product = require("../models/product.model");
const Express = require("express");
const router = Express.Router();

router.get("/",async(req,res)=>{
    try{
        return res.status(200).send("data received")

    }catch(er){

        return res.status(500).send({error:er})
    }
})

router.get("/category",async(req,res)=>{
  try{
      return res.status(200).send("data received")

  }catch(er){

      return res.status(500).send({error:er})
  }
})
router.post("/create", async (req, res) => {
    try {
      let product =await Product.create(req.body);
      console.log(product)
      return res.status(200).send(product);
    } catch (er) {
      console.log(er)
      return res.status(500).send({ error: er });
    }
  });
module.exports = router;
