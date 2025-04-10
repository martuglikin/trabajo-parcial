
const userController = {
    inicioSesion: function(req, res){
        res.render('login');
    },

    perfil: function(req, res){
        res.render('profile');
    },

    registro: function(req, res){
        res.render('register');
    },
}

module.exports = userController;