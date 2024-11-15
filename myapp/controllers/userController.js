const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: (req, res) => {
        db.Users.findAll()
        .then((result) => {
            return res.send( result)
        })
        .catch((err) => {
          return console.log(err);
        });
        
    },
    login: (req, res) => {
        return res.render("login"); // Renderiza la vista de inicio de sesión
    },
    loginUser: (req, res) => {
        let form = req.body;

        let filtro = {
            where: {
                email: form.email
            }
        };

        db.User.findOne(filtro)
            .then((result) => {
                if (result != undefined) {
                    let validarClave = bcryptjs.compareSync(form.contraseña, result.contraseña);

                    if (validarClave) {
                        req.session.user = result.dataValues;
                        return res.redirect("/products"); // Redirige al área de productos
                    } else {
                        return res.send("Clave incorrecta");
                    }
                } else {
                    return res.send("No se encontró un usuario");
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send("Error interno del servidor");
            });
    },
};

module.exports = userController;
