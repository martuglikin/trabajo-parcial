let datosProductos = require("../db/index")

const productController = {
    detalle: function(req, res) {
        
        let id = req.params.id;
        let producto = {};

        for (let i = 0; i < datosProductos.productos.length; i++) {
          if(id == datosProductos.productos[i].id){
            producto = datosProductos.productos[i];
          }
        }
        
        res.render('product', {producto: producto});

        // let producto = datosProductos.productos[0]
        // res.render('product', {producto: producto});
      },

    agregarProducto: function(req, res) {
        res.render('product-add', {nombreusuario: datosProductos.usuario.usuario}); //se lo mande a product-add para que me aparezca el nombre
      }
    }

module.exports = productController;