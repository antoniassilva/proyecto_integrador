const express = require('express');
const router = express.Router();

/* Requerir el controlador */
const indexController = require('../controllers/productController'); 

/* GET home page */
router.get('/', indexController.index);

module.exports = router;