const { response, request } = require('express');
const Pais = require('../models/Pais');

const getPaises = async (req = request, res = response) => {
    try {

        const paises = await Pais.findAll();

        if (paises.length > 0) {
            return res.status(200).json({
                count: paises.length,
                paises
            });
        } else {
            return res.status(200).json({
                msg: 'No hay paises registrados'
            });
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor. No se pudo obtener los paises' });
    }
}

module.exports = {
    getPaises
}