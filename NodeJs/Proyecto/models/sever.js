const express = require('express');

class Server{
    constructor(){

        const app = express();
        this.port = process.env.PORT
        this.paths = {
            usuariosPath: 'api/usuarios'
        }

        this.connectDB();
        this.routes();
        this.listen();
    }

    async connectDB (){
        DBconnection();
    }
    routes(){
        this.app.use(this.paths.usuariosPath, require("../routes/usuario.routes.js"));
    }

    listen(){
        this.app.listen(this.port = ()=>{
            console.log(`Servidor conectado en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;
