module.exports = function (sequelize, dataTypes ) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            notNull: true,
            type : dataTypes.INTEGER.UNSIGNED
        },
        usuario_id: {
            type : dataTypes.INTEGER.UNSIGNED,
            notNull: true, 
        },
        imagen_producto: {
            type : dataTypes.STRING,
            notNull: true, 
        },
        nombre_producto: {
            type : dataTypes.STRING,
            notNull: true, 
        },
        descripcion: {
            type : dataTypes.STRING,
            notNull: true, 
        },
        createdAt: {
            type : dataTypes.DATE,
        },
        updatedAt: {
            type : dataTypes.DATE,
        },
        deletedAt: {
            type : dataTypes.DATE,
        }
  	}

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false
    }
    
    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {

            as: "publicador",

            foreignKey: "usuario_id"
        });
        Producto.hasMany(models.Comentario, {

            as: "comentarios",

            foreignKey: "id"
        });
    }

    return Producto;
}