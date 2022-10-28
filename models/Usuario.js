const { DataTypes } = require('sequelize');
const db = require('../db/connection');
const Pais = require('./Pais');

const Usuario = db.define('Usuario', {
    ID_Usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ID_Pais: {
        type: DataTypes.INTEGER,
        references: {
            model: Pais,
            key: 'ID_Pais',
        }
    },
    Nombre: {
        type: DataTypes.STRING,
    },
    Apellidos: {
        type: DataTypes.STRING,
    },
    Telefono: {
        type: DataTypes.STRING,
    },
    Ciudad: {
        type: DataTypes.STRING,
    },
    Fecha_Nacimiento: {
        type: DataTypes.DATE,
    },
    Edad: {
        type: DataTypes.INTEGER,
    },
    Sitio_Trabajo: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
}, {
    tableName: 'Usuario'
});

Usuario.belongsTo(Pais, { foreignKey: 'ID_Pais', foreignKeyConstraint: true });

module.exports = Usuario;