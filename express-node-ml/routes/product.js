const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/product/:id', productController.detalle);
router.get('/product-add', productController.agregarProducto);
router.post('/product-add', productController.crearProducto )

module.exports = router;
