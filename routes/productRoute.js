const express = require("express");
const {
  addProduct,
  showProducts,
  deleteProduct,
  updateProduct,
  getProduct,
  displayProducts
} = require("../controllers/productController");

const Router = express.Router();

// admin routes
Router.get("/", showProducts);
Router.get("/all", displayProducts);
Router.post("/", addProduct);
Router.get("/:id", getProduct);
Router.patch("/:id", updateProduct);
Router.delete("/:id", deleteProduct);

module.exports = Router;
