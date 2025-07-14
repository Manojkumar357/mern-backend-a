const express = require("express");
const { addProduct } = require("../controllers/productController");

const Router = express.Router();

Router.post("/", addProduct);

module.exports = Router;