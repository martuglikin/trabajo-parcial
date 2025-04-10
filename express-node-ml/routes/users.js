const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/login', userController.inicioSesion);
router.get('/profile', userController.perfil);
router.get('/register', userController.registro);

module.exports = router;
