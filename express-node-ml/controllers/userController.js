let datosProductos = require('../db/index')
let db = require('../database/models')
let Usuario = db.Usuario
let bcrypt = require('bcryptjs')

const userController = {
    inicioSesion: function(req, res){
        res.render('login');
    },

    perfil: function (req, res) {
        const userId = req.params.id;

        Usuario.findByPk(userId, {
            include: [
                {
                association: "productos",
                include: [{ association: "comentarios" }] 
                }
            ]
            })

        .then(function (usuario) {
            if (usuario) {
            res.render("profile", {
                usuario: usuario,
                productos: usuario.productos,
                total: usuario.productos.length
            });
            } else {
            res.send("Usuario no encontrado.");
            }
    })
    },

    registro: function(req, res){
        res.render('register', {nombreUsuario: datosProductos.usuario.usuario});
    },

    registroCrear: function(req, res){
        Usuario.create({
            email: req.body.email,
            contraseña: bcrypt.hashSync(req.body.contraseña, 10),
            fecha_nacimiento: req.body.fecha_nacimiento,
            dni: req.body.dni,
            foto_perfil: req.body.foto_perfil 
        })

        .then(function(){
            res.redirect('/users/login')
        })
    }
}

module.exports = userController;