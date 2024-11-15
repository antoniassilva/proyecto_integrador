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


        return res.send(form)
    },
};

module.exports = userController;
