const token = require('../util/token');
const usuarioModel = require('../models/usuarioModel')

exports.entrar=async(entrar)=>{
    let resp = await usuarioModel.registrarUsuario(nick)
    if(resp.insertId){
        return {
            "IdUser": resp.insertId,
            "token": await token.setToken(JSON.stringify(resp.insertId).replace(/"/g, ''), nick),
            "nick": nick
        }
    }
}