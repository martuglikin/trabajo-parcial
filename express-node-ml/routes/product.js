const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/product/:id', productController.detalle);
router.get('/product-add', productController.agregarProducto);

module.exports = router;