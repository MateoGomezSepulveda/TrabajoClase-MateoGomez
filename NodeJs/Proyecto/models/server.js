const express = require('express');
const cors = require('cors');
const { DBconnection } = require('../database/config.js');

class Server{
    constructor(){

        this.app = express();

        this.port = process.env.PORT

        this.paths = {
            usuariosPath: 'api/usuarios',
        }

        this.connectDB();
        this.routes();
        this.middlewares();
    }

    middlewares(){
        // Leer y parsear
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }

    async connectDB (){
        await DBconnection();
    }

    routes(){
        this.app.use(this.paths.usuariosPath, require("../routes/usuario.routes.js"));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor conectado en el puerto: ${this.port}`);
        })
    }
}

module.exports = Server;
