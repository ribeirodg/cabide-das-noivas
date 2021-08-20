const usuarios = require("../database/Usuarios.json");
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

module.exports = {
    showLogin: (req, res) => {


        res.render('entrar', {
            error: null
        });

    },
    login: async (req, res) => {
        let { email, senha } = req.body;

console.log(email,senha)

        const usuario = usuarios.filter(usuario => (usuario.email == email));
        if (usuario.length) {

            const usuarioOk = await bcrypt.compare(senha, usuario[0].senha)
            if (usuarioOk) {
                return res.render('sobre');
            }
        }

        return res.redirect('/login?err=1')
    }
}
