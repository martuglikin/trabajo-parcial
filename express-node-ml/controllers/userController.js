let datosProductos = require('../db/index')
const userController = {
    inicioSesion: function(req, res){
        res.render('login');
    },

    perfil: function(req, res){
         res.render('profile', {
            usuario: datosProductos.usuario,
            nombreUsuario: datosProductos.usuario.usuario
        });
    },

    registro: function(req, res){
        res.render('register', {nombreUsuario: datosProductos.usuario.usuario});
    },
}

module.exports = userController;