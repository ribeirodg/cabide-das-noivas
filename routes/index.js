var express = require('express');
const cabideController = require('../controllers/cabideController');
var router = express.Router();
const servicosController = require('../controllers/cabideController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.post('/entrar', function(req, res, next) {
  res.render('entrar', { title: 'Express' });
});
router.get('/dadoscliente', cabideController.dadoscliente);

module.exports = router;
