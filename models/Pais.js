const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Pais = db.define('Pais', { 
    ID_Pais:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Nombre:{
        type: DataTypes.STRING,
    },
    createdAt:{
        type: DataTypes.DATE,
    },
    updatedAt:{
        type: DataTypes.DATE,
    }
});

module.exports = Pais;