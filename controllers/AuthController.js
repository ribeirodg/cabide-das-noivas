const usuarios = require("../database/Usuarios.json");
const fs = require('fs');
const path = require('path');

module.exports = {
    showLogin: (req, res) => {

        
        res.render('entrar', {
            error: null
        });

    },
    login: (req, res) => {
        let {email,senha} = req.body;


        
        let usuario = usuarios.find(usuario => (usuario.email == email && usuario.senha == senha));
        if (usuario) {
            return res.send("Você é o bichão mesmo!")
        } else {
            return res.render("/login", {erroParaTela: "Login ou Senha inválidos"});
        }
    }
}
