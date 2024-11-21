const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
   
    register: (req, res) => {
        return res.render("register"); 
        
    },
    login: (req, res) => {
        return res.render("login"); // Renderiza la vista de inicio de sesión
    },
    loginUser: (req, res) => {
        let form = req.body;

        let filtro = {
            where:{
                email: form.email
            }
        }

        db.Users.findOne(filtro)
        .then((result) => {

            if (result != undefined) {

                let validarClave = bcryptjs.compareSync( form.contraseña, result.contraseña);
                
                if (validarClave) {
                    req.session.user = result.dataValues;

                    

                    return res.redirect("/products");
                } else {
                    return res.send("Clave incorrecta");
                }

            } else {
                return res.send("No se encontro un usuarios");
            }
        }).catch((err) => {
            return console.log(err);
            
        });

    },
    
    results: (req, res) => {
        /* let qs = req.query.email; */

        let form = req.body;
        let pass = bcryptjs.hashSync(form.contraseña, 10)

        form.contraseña = pass;
       
        db.Users.create(form)
        .then((result) => {
            return res.redirect("/users/login")
        }).catch((err) => {
            return console.log(err);
        });
    },
    logout: (req, res) => {
        req.session.destroy()
        return res.redirect("/products/");
    }
};

module.exports = userController;
