const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    address: [{
        city:{type:String,required:true},
        state:{type:String,required:true},
        landmark:{type:String,required:true},
        pin:{type:String,required:true},
    }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Address = mongoose.model("address", addressSchema);

module.exports = Address;
