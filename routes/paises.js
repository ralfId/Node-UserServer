const { Router } = require('express');
const { getPaises } = require('../controllers/paisController');

const router = Router();

/**
 * @openapi
 * /api/paises:
 *  get:
 *     summary: Get all countries
 *    tags: 
 *     - Paises
 *   responses:
 *     200:
 *       description: OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: array
 *               items:
 *                 type: object
 */
router.get('/', getPaises);

module.exports = router;
