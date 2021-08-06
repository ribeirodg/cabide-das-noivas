
    module.exports = {
      index: (req, res) => {
          res.render('index', { title: 'Cabide das Noivas - Home' });
      },
      modelos: (req, res) => {
          res.render('modelos', { title: 'Cabide das Noivas - Modelo' });
      },
    login:(req,res) => {
      return res.render("login")  
      },
    entrar:(req,res) => {
      return res.render("entrar")  
      }
}
