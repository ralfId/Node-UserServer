const { response, request } = require('express');
const { calcularEdad } = require('../helpers/globalHelpers');
const Usuario = require('../models/Usuario');

const usersGet = (req, res = response) => {
    res.status(201).json({ msg: 'API get - Users Controller' })
}

const usersPost = async (req, res = response) => {

    const userReq = req.body;
    const { ID_Pais, Apellidos, Fecha_Nacimiento } = userReq;
    try {

        /**
         * Validaciones asumiendo que exista un usuario con el mismo ID_Pais y Apellidos
         */
        const usuario = await Usuario.findOne({ where: { Apellidos } });
        const usuarioPais = await Usuario.findOne({ where: { ID_Pais } });

        if (usuario && usuarioPais) {
            return res.status(400).json({
                msg: 'El usuario ya existe'
            });
        }

        const Edad = calcularEdad(Fecha_Nacimiento);

        if (Edad > 120) {
            return res.status(400).json({
                msg: 'El usuario no puede tener mas de 120 años'
            });
        }

        const crear_Usuario = new Usuario({ ...userReq, Edad });

        const data = await crear_Usuario.save();

        res.json({

            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor. No se pudo crear el usuario' });
    }


}

const usersPut = (req = request, res = response) => {
  

    res.json({ msg: 'API put - controller'})
}

const usersDelete = (req, res) => {
    res.json({ msg: 'API delete - controller' })
}



module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
}