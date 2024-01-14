const express = require("express");
const User = require('../models/User');
const userController = require('../controllers/userController');
const router = express.Router();
/* const productController = require('../controllers/productController'); */


router.route('/').get(userController.getUsers);


module.exports= router;


