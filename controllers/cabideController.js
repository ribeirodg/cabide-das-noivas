const modelos = require('../database/modelos.json');

module.exports = {
  index: (req, res) => {
    res.render('index', {title: 'Cabide das Noivas - Home'});
  },
  ajuda: (req, res) => {
    res.render('ajuda', {title: 'Cabide das Noivas - Ajuda'});
  },
  colecoes: (req, res) => {
    res.render('colecoes', {
      title: 'Cabide das Noivas - Coleções'
    });
  },
  contato: (req, res) => {
    res.render('entreEmContato', {
      title: 'Cabide das Noivas - Contato'
    });
  },
  entrar: (req, res) => {
    res.render('entrar', {
      title: 'Cabide das Noivas - Entrar'
    });
  },
  login: (req, res) => {
    res.render('login', {
      title: 'Cabide das Noivas - Login'
    });
  },
  modelos: (req, res) => {
    res.render('modelos', {
      title: 'Cabide das Noivas - Modelos'
    });
  },
  pedidos: (req, res) => {
    res.render('pedidos', {
      title: 'Cabide das Noivas - Pedidos'
    });
  },
  quemSomos: (req, res) => {
    res.render('quemSomos', {
      title: 'Cabide das Noivas - Quem Somos'
    });
  },
  sobre: (req, res) => {
    res.render('sobre', {
      title: 'Cabide das Noivas - Sobre'
    });
  },
	busca: (req, res) => {

		// Guardar a string buscada em uma variável "busca"
		const busca = req.query.busca;

		// Representar em um array "encontradas" somente os modelos
		// que contenham a string buscada
		const encontradas = modelos.filter(
			p => p.nome.toLowerCase().includes(busca.toLowerCase())
		)

		// Retornar uma view com o modelo encontrado
		res.render("index", {modelos: encontradas});
	}
}
// module.exports = cabideController;