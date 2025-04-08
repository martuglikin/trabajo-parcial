const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/product/:id', productsController.detalle);
router.get('/product-add', productsController.agregarProducto);

module.exports = router;