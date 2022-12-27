const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "seller",
      required: true,
    },
    name: { type: String, required: true },
    image: [{ type: String, required: true }],
    price: { type: Number, required: true },
    description: { type: String, required: true },
    review: [{ content: { type: String, required: false } }],
    size: {
      xs: { type: Boolean, required: true },
      s: { type: Boolean, required: true },
      m: { type: Boolean, required: true },
      l: { type: Boolean, required: true },
      xl: { type: Boolean, required: true },
    },
    color: [{ type: String, required: true }],
    quantity: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
