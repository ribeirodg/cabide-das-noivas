var express = require('express');
var router = express.Router();
const cabideController = require('../controllers/cabideController')

/* GET home page. */
router.get('/', cabideController.index);
router.get('/modelos', cabideController.modelos);


// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });
// router.post('/entrar', function(req, res, next) {
//   res.render('entrar', { title: 'Express' });
// });
module.exports = router;
