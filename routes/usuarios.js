const { Router } = require('express');
const { check } = require('express-validator');
const { usersGet, usersPost, usersPut, usersDelete, usersPatch } = require('../controllers/usuarioController');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

/**
 * @openapi
 * /api/usuarios:
 *   get:
 *    tags:
 *    - Usuarios
 *    responses:
 *      200:
 *        description: Return a list of users.
 */
router.get('/', usersGet);

/**
 * @openapi
 * /api/usuarios:
 *  post:
 *   tags:
 *   - Usuarios
 *   requestBody:
 *     content:
 *       'application/json':
 *         schema:
 *          properties:
 *             ID_Pais: 
 *               description: Id del pais al que pertenece
 *               type: integer
 *             Nombre:
 *               description: Nombre del usuario
 *               type: string
 *             Apellidos:
 *               description: Apellidos del usuario
 *               type: string
 *             Telefono:
 *               description: Telefono del usuario
 *               type: string
 *             Ciudad:
 *               description: Ciudad del usuario
 *               type: string
 *             Fecha_Nacimiento:
 *              description: Fecha de nacimiento del usuario
 *              type: string
 *              format: YYYY-MM-DD
 *             Sitio_Trabajo:
 *              description: Sitio de trabajo del usuario
 *              type: string
 *   responses:
 *     '200':
 *       description: Usuario creado correctamente.
 *       content: 
 *         'application/json': {}
 *     '400':
 *       description: Bad request.
 *       content: 
 *         'application/json': { }
 */
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

/**
 * @openapi
 * /api/usuarios/{id}:
 *  put:
 *   tags:
 *   - Usuarios
 *   parameters:
 *   - name: id
 *     in: path
 *     description: ID del usuario a actualizar
 *     required: true
 *     schema:
 *       type: integer
 *   requestBody:
 *     content:
 *       'application/json':
 *         schema:
 *          properties:
 *             ID_Pais: 
 *               description: Id del pais al que pertenece
 *               type: integer
 *             Nombre:
 *               description: Nombre del usuario
 *               type: string
 *             Apellidos:
 *               description: Apellidos del usuario
 *               type: string
 *             Telefono:
 *               description: Telefono del usuario
 *               type: string
 *             Ciudad:
 *               description: Ciudad del usuario
 *               type: string
 *             Fecha_Nacimiento:
 *              description: Fecha de nacimiento del usuario
 *              type: string
 *              format: YYYY-MM-DD
 *             Sitio_Trabajo:
 *              description: Sitio de trabajo del usuario
 *              type: string
 *   responses:
 *     '200':
 *       description: Usuario actualizado correctamente.
 *       content: 
 *         'application/json': {}
 *     '400':
 *       description: Bad request.
 *       content: 
 *         'application/json': { }
 */
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

/**
 * @openapi
 * /api/usuarios/{id}:
 *  delete:
 *   tags:
 *   - Usuarios
 *   parameters:
 *   - name: id
 *     in: path
 *     description: ID del usuario a actualizar
 *     required: true
 *     schema:
 *       type: integer
 *   responses:
 *     '200':
 *       description: Usuario elimnado correctamente.
 *       content: 
 *         'application/json': {}
 *     '400':
 *       description: Bad request.
 *       content: 
 *         'application/json': { }
 */
router.delete('/:id',
    [
        check('id').notEmpty().withMessage('El id es obligatorio').isNumeric().withMessage('El id debe ser un numero'),
        validarCampos
    ]
    , usersDelete);

//router.patch('/', usersPatch);

module.exports = router;    