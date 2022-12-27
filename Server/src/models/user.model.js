const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    address: {
      city:{type:String,required:false},
      state:{type:String,required:false},
      landmark:{type:String,required:false},
      pin:{type:String,required:false},
      
    },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
