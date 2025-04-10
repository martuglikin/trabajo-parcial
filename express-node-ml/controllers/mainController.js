let datosProductos = require('../db/index')

const mainController = {
    index: function(req, res) {
      res.render('index', {productos: datosProductos.productos});
    },
    resultados: function(req, res) {
      res.render('search-results', {
        productos: datosProductos.productos
      });
    }
  }

module.exports = mainController;
