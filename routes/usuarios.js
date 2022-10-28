const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersDelete, usersPatch } = require('../controllers/usuarioController');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.put('/:id', usersPut);

router.delete('/:id', usersDelete);

//router.patch('/', usersPatch);

module.exports = router;    