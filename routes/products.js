const express = require("express");
const Product = require('../models/Product');
const router = express.Router();
const productController = require('../controllers/productController');



router.route('/').get(productController.getProducts);

router.route('/:id').get(productController.getSingleProduct);
router.route('/').post(productController.createProduct);

module.exports= router;