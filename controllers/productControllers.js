const products = require('../models/products');

// Declared variable for errors
const PRODUCT_DOES_NOT_EXIST = 'Product does not exist.';
const PRODUCT_NAME_IS_EMPTY = 'Product name cannot be empty';
const PRODUCT_QUANTITY_IS_EMPTY = 'Product quantity cannot be empty';


// Get all products
const getAllProducts = (req, res) => {
  res.json(products);
};

// Get product by id
const getProductById = (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = products.find(product => product.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send(PRODUCT_DOES_NOT_EXIST);
  }
};



// Add new product
const addNewProduct = (req, res) => {
  const { name, quantity } = req.body;

  if (!name) {
    return res.send(PRODUCT_NAME_IS_EMPTY);
  } else if (!quantity) {
    return res.send(PRODUCT_QUANTITY_IS_EMPTY);
  }

  const newProduct = {
    id : products.length + 1,
    name,
    quantity
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

// Delete product by id
const deleteProductById = (req, res) => {
  const productId = parseInt(req.params.productId);
  const index = products.findIndex(product => product.id === productId);

  if (index !== -1) {
    products.splice(index, 1);
    res.send(`Product with id number: ${productId} was deleted.`);
  } else {
    res.status(404).send(PRODUCT_DOES_NOT_EXIST);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  deleteProductById
};