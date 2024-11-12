const express = require('express');
const router = express.Router();

/* Requerir el controlador */
const indexController = require('../controllers/productController'); 

/* GET home page */
router.get('/', indexController.index);

/* GET details page. */
router.get('/id/:idProducto', indexController.detalle);

/* GET Creat page. */
router.get('/crear', indexController.showCrear);

/* POST Creat  page. */
router.post('/crear', indexController.saveCraer);

/* GET Search page. */
router.get('/busqueda', indexController.search);

module.exports = router;