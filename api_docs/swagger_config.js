const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Node JS API',
            description: 'Users CRUD API ',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:4001",
                description: "Development server"
            },
        ],
    },
    apis: [
        '../routes/*.js',],

}

const swaggerSpec = swaggerJsdoc(options)

module.exports = { swaggerSpec };