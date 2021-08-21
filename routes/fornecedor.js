const express = require('express');
const router = express.Router();

const fornecedor_controller = require('../controllers/fornecedor');

router.get('/test', fornecedor_controller.test);

router.post('/create', fornecedor_controller.fornecedor_create);
router.get('/:id', fornecedor_controller.fornecedor_details);
router.put('/:id/update', fornecedor_controller.fornecedor_update);
router.delete('/:id/delete', fornecedor_controller.fornecedor_delete);

module.exports = router;
