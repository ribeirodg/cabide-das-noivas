var express = require('express');
var router = express.Router();
const cabideController = require('../controllers/cabideController')

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



// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });
// router.post('/entrar', function(req, res, next) {
//   res.render('entrar', { title: 'Express' });
// });
module.exports = router;
