// const petsJson = require('../database/pets.json') 
const cabideController= {
    index:(req,res) => {
      return res.render("index")  
    },
    login:(req,res) => {
      return res.render("login")  
      },
    entrar:(req,res) => {
      return res.render("entrar")  
      }
}
module.exports = cabideController;