var express = require('express');
var router = express.Router();

/* Requerir el controlador */
const userController = require('../controllers/userController');

router.get('/', userController.register);

router.get('/login', userController.login);


module.exports = router;
