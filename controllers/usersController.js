const { response, request } = require('express');

const usersGet = (req, res = response) => {
    res.status(201).json({ msg: 'API get - Users Controller' })
}

const usersPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'API post - controller',
        nombre,
        edad
    })
}

const usersPut = (req = request, res = response) => {
    //obtener el id proporcionado en la url
    const {id} = req.params;

    //obtener todos los params usndo express
    const {apikey, q } = req.query;

    res.json({ msg: 'API put - controller', id, apikey, q})
}

const usersDelete = (req, res) => {
    res.json({ msg: 'API delete - controller' })
}

const usersPatch = (req, res) => {
    res.json({ msg: 'API patch - controller' })
}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}