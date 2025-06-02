let datosProductos = require('../db/index')
let db = require("../database/models")
let Producto = db.Producto
const op = db.Sequelize.Op;

const mainController = {
  index: function (req, res) {
    Producto.findAll({
      include: [{ association: "publicador" }, { association: "comentarios" }],
      //limit: 8 //https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#limits-and-pagination
    })

      .then(function (productos) {
        res.render('index', { productos: productos });
      })
    //res.render('index', {productos: datosProductos.productos});
  },

  resultados: function (req, res) {
    let search = req.query.search;

    Producto.findAll({
      where: {
        nombre_producto: { [op.like]: `%${search}%` }
      },
      include: [{ association: "publicador" }, { association: "comentarios" }]
    })
      .then(function (productos) {
        res.render('search-results', {
          productos: productos,
          search: search
        });
      })
  },

  //res.render('search-results', {
  //productos: datosProductos.productos
  //});

  profile: function (req, res) {
    res.render('profile', {
      usuario: datosProductos.usuario
    });
  }
}

module.exports = mainController;