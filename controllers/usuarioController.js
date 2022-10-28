const { response, request } = require('express');
const { calcularEdad } = require('../helpers/globalHelpers');
const Usuario = require('../models/Usuario');
const Pais = require('../models/Pais');


const usersGet = async (req = request, res = response) => {
    try {

        const allUsers = await Usuario.findAll({ include: { model: Pais, attributes: ['ID_Pais', 'Nombre'] } });

        if (allUsers.length === 0) {
            return res.status(400).json({
                msg: 'No hay usuarios registrados'
            });
        } else {

            return res.json({ data: allUsers });
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor. No se pudo obtener los usuarios' });
    }

}


const usersPost = async (req, res = response) => {

    const userReq = req.body;
    const { ID_Pais, Apellidos, Fecha_Nacimiento } = userReq;
    try {

        /**
         * Validacion para que no exista un usuario con el mismo ID_Pais y Apellidos
         */
        const usuario = await Usuario.findOne({ where: { Apellidos, ID_Pais } });

        if (usuario) {
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

        const data = await Usuario.create({ ...userReq, Edad });

        res.json({ data });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor. No se pudo crear el usuario' });
    }


}

const usersPut = async (req = request, res = response) => {
    const { id } = req.params;
    const { ID_Pais, Apellidos, Fecha_Nacimiento } = req.body;
    try {


        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(400).json({ msg: `No se encontro usuario con el id ${id}` });
        }

        if (usuario.ID_Pais !== ID_Pais) {
            const usuarioRepetido = await Usuario.findOne({ where: { Apellidos, ID_Pais } });
            if (usuarioRepetido) {
                return res.status(400).json({
                    msg: 'Ya existe un usuario con el mismo Nombre y Apellidos'
                });
            }
        }

        if (Fecha_Nacimiento) {
            usuario.Fecha_Nacimiento = calcularEdad(Fecha_Nacimiento);
        }

        usuario.update(req.body);

        return res.json({ data: usuario });


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor. No se pudo actualizar el usuario' });
    }
}

const usersDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(400).json({ msg: `No se encontro usuario con el id ${id}` });
        }

        usuario.destroy();

        return res.json({ msg: 'Usuario eliminado' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor. No se pudo eliminar el usuario' });
    }

}



module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
}