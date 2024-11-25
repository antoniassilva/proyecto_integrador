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
        let form = req.body;
    
        // Validar que los campos obligatorios no estén vacíos
        if (form.contraseña === "") {
            return res.send("La contraseña es un campo obligatorio");
        }
        if (form.email === "") {
            return res.send("El email es un campo obligatorio");
        }
        if (form.usuario === "") {
            return res.send("El nombre de usuario es un campo obligatorio");
        }
    
        // Verificar si el email ya está registrado
        let filtro = {
            where: {
                email: form.email
            }
        };
    
        db.Users.findOne(filtro)
            .then((result) => {
                if (result) {
                    // Si se encuentra un usuario con el mismo email
                    return res.send("El email ya está registrado. Por favor, utiliza otro.");
                } else {
                    // Si no se encuentra, continuar con el registro
                    let pass = bcryptjs.hashSync(form.contraseña, 10);
                    form.contraseña = pass;
    
                    db.Users.create(form)
                        .then(() => {
                            return res.redirect("/users/login");
                        })
                        .catch((err) => {
                            console.log(err);
                            return res.send("Error al registrar el usuario");
                        });
                }
            })
            .catch((err) => {
                console.log(err);
                
            });
    },
    logout: (req, res) => {
        req.session.destroy()
        return res.redirect("/products");
    },

    perfil: (req, res) => {
        return res.render("perfil"); 
    }
};

module.exports = userController;
