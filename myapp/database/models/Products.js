module.exports = function(sequelize, dataTypes){

    let alias = "Products"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id:{
            type: dataTypes.INTEGER,
        },
        imagen:{
            type: dataTypes.STRING,
        },
        nombre_producto:{
            type: dataTypes.STRING,
        },
       descripcion_producto:{
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: "products",
        timestamps: false,
        underscored: true
    }

    let Products = sequelize.define(alias, cols, config);
    Products.associate = function(models) {
        Products.belongsTo(models.Users , {
            as: "users",             // alias de la relacion
            foreignKey: "usuario_id"   // un PK de otra tabla
        })
    }

    return Products
}