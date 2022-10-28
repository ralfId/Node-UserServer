const { Router } = require('express');
const { check } = require('express-validator');
const { usersGet, usersPost, usersPut, usersDelete, usersPatch } = require('../controllers/usuarioController');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usersGet);

router.post('/',
    [
        check('Nombre').notEmpty().withMessage('El nombre es obligatorio').isLength({ max: 100, min: 3 }).withMessage('Debe tener entre 3 y 100 caracteres'),
        check('Apellidos').notEmpty().withMessage('El apellido es obligatorio').isLength({ max: 100, min: 3 }).withMessage('Debe tener entre 3 y 100 caracteres'),
        check('Telefono').notEmpty().withMessage('El telefono es obligatorio').isLength({ max: 50, min: 3 }).withMessage('Debe tener entre 3 y 50 caracteres'),
        check('Ciudad').notEmpty().withMessage('La ciudad es obligatoria').isLength({ max: 100, min: 3 }).withMessage('Debe tener entre 3 y 100 caracteres'),
        check('Fecha_Nacimiento').notEmpty().withMessage('La fecha de nacimiento es obligatoria').isDate().withMessage('Debe ser un formato de fecha valida'),
        check('ID_Pais').notEmpty().withMessage('El pais es obligatorio'),
        check('Sitio_Trabajo').notEmpty().withMessage('El sitio de trabajo es obligatorio').isLength({ max: 200, min: 3 }).withMessage('Debe tener entre 3 y 200 caracteres'),
        validarCampos
    ], usersPost);

router.put('/:id',
    [
        check('id').notEmpty().withMessage('El id es obligatorio').isNumeric().withMessage('El id debe ser un numero'),
        check('Nombre').notEmpty().withMessage('El nombre es obligatorio').isLength({ max: 100, min: 3 }).withMessage('Debe tener entre 3 y 100 caracteres'),
        check('Apellidos').notEmpty().withMessage('El apellido es obligatorio').isLength({ max: 100, min: 3 }).withMessage('Debe tener entre 3 y 100 caracteres'),
        check('Telefono').notEmpty().withMessage('El telefono es obligatorio').isLength({ max: 50, min: 3 }).withMessage('Debe tener entre 3 y 50 caracteres'),
        check('Ciudad').notEmpty().withMessage('La ciudad es obligatoria').isLength({ max: 100, min: 3 }).withMessage('Debe tener entre 3 y 100 caracteres'),
        check('Fecha_Nacimiento').notEmpty().withMessage('La fecha de nacimiento es obligatoria').isDate().withMessage('Debe ser un formato de fecha valida'),
        check('ID_Pais').notEmpty().withMessage('El pais es obligatorio'),
        check('Sitio_Trabajo').notEmpty().withMessage('El sitio de trabajo es obligatorio').isLength({ max: 200, min: 3 }).withMessage('Debe tener entre 3 y 200 caracteres'),
        validarCampos
    ], usersPut);

router.delete('/:id',
    [
        check('id').notEmpty().withMessage('El id es obligatorio').isNumeric().withMessage('El id debe ser un numero'),
        validarCampos
    ]
    , usersDelete);

//router.patch('/', usersPatch);

module.exports = router;    