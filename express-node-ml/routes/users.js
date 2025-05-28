const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/login', userController.inicioSesion);
router.post('/login', userController.login);
router.get('/register', userController.registro);
router.post('/register', userController.registroCrear);
router.post('/logout', userController.logout)
router.get('/profile/:id', userController.perfil);

module.exports = router;
