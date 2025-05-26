let datosProductos = require("../db/index")
let db = require("../database/models")
let Producto = db.Producto
let Comentario = db.Comentario

const productController = {
    detalle: function(req, res) {
        
        let id = req.params.id;
        let producto = {};

        Producto.findOne({
          where: {id: id}, // el primer id columna de la base de datos, el segundo id es la var de la linea 8
          include:[{association: "publicador"}, {association: "comentarios", include:[{association: "comentador"}]}]

        })
        
        .then(function(datos){

          res.render('product', {producto: datos});
        })

        

        // let producto = datosProductos.productos[0]
        // res.render('product', {producto: producto});
      },

    agregarProducto: function(req, res) {
        res.render('product-add', {nombreusuario: datosProductos.usuario.usuario}); //se lo mande a product-add para que me aparezca el nombre
      },

    crearProducto:function(req, res){

      Producto.create({
        usuario_id: 1,
        imagen_producto: req.body.imagen_producto,
        nombre_producto: req.body.nombre_producto,
        descripcion: req.body.descripcion,
      })
       .then(function(){
        res.redirect('/')
      })

      },

      comentar: function(req, res){

        console.log(req.body, 'probando')
         Comentario.create({
           texto: req.body.comment,
           producto_id: req.params.id,
           usuario_id: 1
         })

         .then(function(){
           res.redirect('/product/product/' + req.params.id);
         })
      }

    }
    

module.exports = productController;