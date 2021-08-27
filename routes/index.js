var express = require('express');
const cabideController = require('../controllers/cabideController');
var router = express.Router();


/* GET home page. */
router.get('/', cabideController.index);
router.get('/ajuda', cabideController.ajuda);
router.get('/colecoes', cabideController.colecoes);
router.get('/contato', cabideController.contato);
router.get('/entrar', cabideController.entrar);
router.get('/login', cabideController.login);
router.get('/modelos', cabideController.modelos);
router.get('/pedidos', cabideController.pedidos);
router.get('/quemSomos', cabideController.quemSomos);
router.get('/sobre', cabideController.sobre);
router.get('/busca', cabideController.busca);
module.exports = router;
