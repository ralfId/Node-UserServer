const express = require('express')
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')
const db = require('../db/connection');
const { swaggerSpec } = require('../api_docs/swagger_config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.dbConnection();
        this.middlewares();
        this.routes();


    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Conectado a la BD');
        } catch (error) {
            console.log(error)
            throw new Error('Error al inicializar la BD');
        }
    }


    routes() {

        this.app.use('/api/usuarios', require('../routes/usuarios'));
        this.app.use('/api/paises', require('../routes/paises'));
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
        //documentacion
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }
}

module.exports = Server;