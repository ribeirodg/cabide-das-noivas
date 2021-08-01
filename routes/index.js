var express = require('express');
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
module.exports = router;
