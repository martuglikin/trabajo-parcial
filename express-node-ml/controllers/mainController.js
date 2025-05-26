let datosProductos = require('../db/index')
let db = require("../database/models")
let Producto = db.Producto

const mainController = {
    index: function(req, res) {
      Producto.findAll({
        include:[{association: "publicador"}, {association: "comentarios", include:[{association: "comentador"}]}]
      })
      
      .then(function (productos) {
      let productosLimitados = [];

      for (let i = 0; i < 8; i++) {
        productosLimitados.push(productos[i]);
      }

      res.render('index', { productos: productosLimitados });
    })
      //res.render('index', {productos: datosProductos.productos});
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
