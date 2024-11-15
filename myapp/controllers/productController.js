const { Association } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op;

const productController = {
    index: function (req, res) {
    
    db.Products.findAll()
    .then((result) => {
        return res.render("home", {listaProductos: result})
    })
    .catch((err) => {
      return console.log(err);
    });

    },
    detalle: function (req, res) {
        let id = req.params.idProducto;
        

   db.Products.findByPk(id, {
    include: [{ association: "users" }] // Asegúrate de que el alias "Users" coincide con el definido en tu modelo
})
   .then(function(results) {
    return res.render("product", {producto: results})
   })  
   .catch(function(err) {
    return console.log(err);
   }) 

        
    },
    showCrear: function (req, res) {
        return res.render("productAdd"); 
    },

    saveCrear: function (req, res) {
        let form = req.body; 

    db.Products.create(form) 
    .then((result) => {
      return res.redirect("/products")
    }).catch((err) => {
      return console.log(err);
      
    });
        
    },

    search: function (req, res) {
        let qs = req.query.search;

        let filtro = {
            where: {
                nombre_producto: {
                    [op.like]: `%${qs}%`  
                }
            },
            order: [
                ['createdAt', 'DESC']  
            ]
        };
        
        db.Products.findAll(filtro)
            .then((result) => {
                if (result.length === 0) {
                    return res.send("No hay resultados para su criterio de búsqueda.");
                }
        
                return res.render("searchResults", { listaProductos: result });
            })
            .catch((err) => {
                console.log(err);
                
            });
    }


};

module.exports = productController;