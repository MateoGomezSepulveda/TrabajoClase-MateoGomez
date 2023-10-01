const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.js');

class Server {
    constructor(){
        this.app = express();

        this.port = process.env.PORT

        this.paths = {
            usuarioPath: '/api/usuarios',
        }

        this.middlewares();

        this.ConnectDB();

        this.routes();
    }
    async ConnectDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.json());

        this.app.use(cors());
    }

    routes(){
        this.app.use(this.paths.usuarioPath, require("../routes/usuario.routes.js"));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor conectado en el puerto: ${this.port}`);
        })
    }
}

module.exports = Server;