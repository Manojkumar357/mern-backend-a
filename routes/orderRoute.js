const express = require("express");
const { authenticate, authorize } = require("../middlewares/auth");
const {
  newOrder,
  showOrders,
  showAllOrders,
  updateOrder,
  deleteOrder
} = require("../controllers/orderController");

const Router = express.Router();

Router.post("/", newOrder);
Router.get("/:id", showOrders);
Router.get("/", authenticate, authorize("admin"), showAllOrders);
Router.patch("/:id", updateOrder);
Router.delete("/delete/:id", deleteOrder); 


module.exports = Router;

