const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: { type: String },
    description: { type: String },
    price: { type: Number },
    imgUrl: { type: String }, // Fixed: type should not be in quotes
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);