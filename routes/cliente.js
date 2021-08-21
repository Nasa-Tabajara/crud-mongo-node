const express = require('express');
const router = express.Router();

const cliente_controller = require('../controllers/cliente');

router.get('/test', cliente_controller.test);

router.post('/create', cliente_controller.cliente_create);
router.get('/', cliente_controller.cliente_details);
router.post('/id/update', cliente_controller.cliente_update);
router.post('/delete', cliente_controller.cliente_delete);

module.exports = router;   