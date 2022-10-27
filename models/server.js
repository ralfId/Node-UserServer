const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

         //middlewares de la app
         this.middlewares();
         
        //rutas de la app
        this.routes();
       

    }

    routes() {

        this.app.use( '/api/usuarios', require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        })
    }

    middlewares() {
        //directorio publico
        this.app.use(express.static('public'));
        //cors
        this.app.use(cors());
        //lectura y parseo del body en formato json
        this.app.use(express.json());
    }
}

module.exports = Server;