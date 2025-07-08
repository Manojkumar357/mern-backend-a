const express = require('express');
const { authenticate, authorize } = require('../middlewares/auth.js');
const {
  register,
  login,
  showUsers,
  userUpdate,
  userDelete,
} = require('../controllers/userController.js');

const Router = express.Router();

Router.post('/register', register);
Router.patch('/:id', authenticate, authorize('admin'), userUpdate);
Router.delete('/:id', authenticate, authorize('admin'), userDelete);
Router.get('/users', authenticate, authorize('admin'), showUsers);
Router.post('/login', login);

module.exports = Router;
