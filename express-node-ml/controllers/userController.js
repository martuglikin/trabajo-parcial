let datosProductos = require('../db/index')
let db = require('../database/models')
let Usuario = db.Usuario
let bcrypt = require('bcryptjs')

const userController = {
    inicioSesion: function(req, res){
        if(req.session.userLogueado != undefined ){
            return res.redirect('/')
        } else {
            return res.render('login');
        }   
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

    login: function(req, res){
        //res.send(req.body)

        Usuario.findOne({
            where: {
                email: req.body.email
            }
        })

        .then(function(data){
            if(data) {
                if(bcrypt.compareSync(req.body.contraseña, data.contraseña)){
                    req.session.usuarioLogueado = data
                    if(req.body.recordarme){
                        res.cookie('usuarioLogueado', data, { maxAge: 1000 * 60 * 5 })
                    }
                    res.redirect(`/users/profile/${data.id}`)
                }else{
                    res.send("esta mal la contraseña")
                }
            }else{
                res.send("no existe un usuario con ese email")
            }
        })
    },

    registro: function(req, res){
        if(req.session.userLogueado != undefined ){
            return res.redirect('/')
        } else {
            return res.render('register');
        }
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
    },
    logout: function(req, res){
        req.session.destroy()
        if(req.cookies.usuarioLogueado){
            res.clearCookie('usuarioLogueado')
        }
        res.redirect('/')
    }
}

module.exports = userController;