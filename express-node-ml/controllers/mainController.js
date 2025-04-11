let datosProductos = require('../db/index')

const mainController = {
    index: function(req, res) {
      res.render('index', {productos: datosProductos.productos});
    },
    resultados: function(req, res) {
      res.render('search-results', {
        productos: datosProductos.productos
      });
    },
    profile: function(req, res){
      res.render('profile',{
        usuario: datosProductos.usuario
      });
    }
  }

module.exports = mainController;
