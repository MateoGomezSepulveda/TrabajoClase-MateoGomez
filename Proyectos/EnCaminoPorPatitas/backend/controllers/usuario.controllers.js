const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');


const getUsuario = (req, res) =>{
    res.json({
        "msg": "get api"
    })
}

const postUsuario = async(req, res)=>{
    
    const {nombre, email, password, rol} = req.body;
    const usuario = new Usuario({nombre, email, password, rol});

    // verificar si el correo existe

    const ExisteEmail = await Usuario.findOne({email});
    if(ExisteEmail){
        return res.status(404).json({
            "msg": "El email ya fue registrado"
        });
    }
    // Encriptar las contraseñas
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.json({
        "message":"post api",
        usuario
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