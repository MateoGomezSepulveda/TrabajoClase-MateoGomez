const Usuario = require('../models/Usuario.js');

const getUsuario = (req, res) =>{
    res.json({
        "msg": "get api"
    })
}

const postUsuario = (req, res) =>{
    res.json({
        "msg": "post api"
    })
}

const deleteUsuario = (req, res) =>{
    res.json({
        "msg": "delete api"
    })
}

const putUsuario = (req, res) =>{
    res.json({
        "msg": "put api"
    })
}

const patchUsuario = (req, res) =>{
    res.json({
        "msg": "patch api"
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    deleteUsuario,
    putUsuario,
    patchUsuario
}