const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

// Get all products
router.get('/', productController.getAllProducts);

// Get product by id
router.get('/:productId', productController.getProductById);

// Add new product
router.post('/add-product', productController.addNewProduct);

// Delete product by id
router.delete('/:productId', productController.deleteProductById);

module.exports = router;