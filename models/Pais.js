const { DataTypes } = require('sequelize');
const db = require('../db/connection');
/**
 * @openapi
 * components:
 *   schemas:
 *    Pais:
 *     type: object
 *     properties:
 *       ID_Pais:
 *         type: integer
 *         description: The auto-generated id of the country.
 *       Nombre:
 *         type: string
 *         description: The name of the country.
 */
const Pais = db.define('Pais', {
    ID_Pais: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Nombre: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
});

module.exports = Pais;