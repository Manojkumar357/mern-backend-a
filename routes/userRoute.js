const express = require('express');
const { authenticate, authorize } = require('../middlewares/auth.js');
const {
  register,
  login,
  profile,
  updateUser,
  deleteUser,
  showUsers,
  updateProfile,
  getUser,
  addUser,
} = require("../controllers/userController");

const Router = express.Router();

// user routes
Router.post("/register", register);
Router.post("/login", login);
Router.get("/:id/profile", authenticate, profile);
Router.patch("/:id/profile", authenticate, updateProfile);

// admin routes
Router.get("/", showUsers);
Router.post("/", addUser);
Router.get("/:id", getUser);
Router.patch("/:id", updateUser);
Router.delete("/:id", deleteUser);

module.exports = Router;
