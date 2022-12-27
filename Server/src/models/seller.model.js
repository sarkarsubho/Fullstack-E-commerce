const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const SellerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    sellerAddress: {
      shopname:{type:String,required:true},
      city:{type:String,required:true},
      pin:{type:String,required:true},
      landmark:{type:String,required:true},
    },
  },
  { versionKey: false, timestamps: true }
  
);

const Seller = mongoose.model("seller", SellerSchema);
module.exports = Seller;
