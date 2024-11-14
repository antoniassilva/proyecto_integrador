module.exports = function(sequelize, dataTypes){

    let alias = "Users"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.STRING,
        },
        usuario:{
            type: dataTypes.DATE,
        },
        contraseña:{
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: "users",
        timestamps: true,
        underscored: false
    }

    let Users = sequelize.define(alias, cols, config);
}