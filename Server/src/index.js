const express =require("express");
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

// controllers
const userController=require("./controllers/user.Controller");
const sellerController=require("./controllers/seller.controller");
const productControler=require("./controllers/product.controller");
const cartController=require("./controllers/cart.Controller");

// Routes
app.use("/user",userController);
app.use("/seller",sellerController);
app.use("/product",productControler);
app.use("/cart",cartController);
app.use("/",(req,res)=>{
    res.status(200).send(
        `<h3 style="color:green;font-size:26px;margin:20px auto;">
         All ok, E-Commerce server is running smoothly
        </h3>
        `
    )
})
module.exports=app;
