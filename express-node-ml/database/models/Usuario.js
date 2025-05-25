module.exports = function (sequelize, dataTypes ) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            notNull: true,
            type : dataTypes.INTEGER.UNSIGNED
        },
        email: {
            type : dataTypes.STRING,
            notNull: true, 
            unique: true
        },
        contraseña: {
            type : dataTypes.STRING,
            notNull: true, 
        },
        fecha_nacimiento: {
            type : dataTypes.DATE,
        },
        dni: {
            type : dataTypes.INTEGER.UNSIGNED,
            notNull: true, 
            unique: true
        },
        foto_perfil: {
            type : dataTypes.STRING,
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
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }
    
    let Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}
