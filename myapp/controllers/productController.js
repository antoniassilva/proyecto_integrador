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

   db.Products.findByPk(id)
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

    saveCraer: function (req, res) {
        
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