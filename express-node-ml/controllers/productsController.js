const productsController = {
    detalle: function(req, res) {
        res.render('product');

        // let producto = data.productos[0]
        // res.render('product', {producto: producto});
      },
      
    agregarProducto: function(req, res) {
        res.render('product-add');
      }
    }

module.exports = productsController;
