const { Router } = require('express');
const { getPaises } = require('../controllers/paisController');

const router = Router();

/**
 * @openapi
 * /api/paises:
 *   get:
 *    tags:
 *    - Paises
 *    responses:
 *      200:
 *        description: Return a list of countries.
 */
router.get('/', getPaises);

module.exports = router;
