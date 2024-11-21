var express = require('express');
var router = express.Router();

/* Requerir el controlador */
const userController = require('../controllers/userController');


router.get('/register', userController.register);
router.post('/register', userController.results);

router.get('/login', userController.login);

/* procesar sufijos Login*/
router.post('/login', userController.loginUser)


router.post("/logout", userController.logout)




module.exports = router;
