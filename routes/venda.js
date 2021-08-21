const express = require('express');
const router = express.Router();

const venda_controller = require('../controllers/venda');

router.get('/test', venda_controller.test);

router.post('/create', venda_controller.venda_create);
router.get('/:id', venda_controller.venda_details);
router.put('/:id/update', venda_controller.venda_update);
router.delete('/:id/delete', venda_controller.venda_delete);

module.exports = router;
