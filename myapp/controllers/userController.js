const db = require('../database/models');

const userController = {
    register: (req, res)=>{
        return res.render("register")
    },
    login: (req, res)=>{
        return res.render("login")
    },
}

module.exports= userController