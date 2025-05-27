const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/login', userController.inicioSesion);
router.get('/register', userController.registro);
router.post('/register', userController.registroCrear);
router.get('/profile/:id', userController.perfil);

module.exports = router;
