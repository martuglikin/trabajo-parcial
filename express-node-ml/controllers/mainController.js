let datosProductos = require('../db/index')

const mainController = {
    index: function(req, res) {
      res.render('index', {productos: datosProductos.productos});
    },
    resultados: function(req, res) {
      res.render('searchResults');
    }
  }

module.exports = mainController;
