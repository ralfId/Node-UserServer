const { Router } = require('express');
const { getPaises } = require('../controllers/paisController');

const router = Router();

router.get('/', getPaises);

module.exports = router;
