module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        producto_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        texto: {
            type: dataTypes.STRING,
            notNull: true,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        }
    }

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    }

    let Comentario = sequelize.define(alias, cols, config);


    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {

            as: "comentador",

            foreignKey: "usuario_id"
        });
        Comentario.belongsTo(models.Producto, {

            as: "producto",

            foreignKey: "producto_id"
        });
    }
    return Comentario;
}