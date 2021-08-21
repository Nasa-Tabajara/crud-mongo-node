const express = require('express');
const router = express.Router();

const produto_controller = require('../controllers/produto');

router.get('/test', produto_controller.test);

router.post('/create', produto_controller.produto_create);
router.get('/:id', produto_controller.produto_details);
router.put('/:id/update', produto_controller.produto_update);
router.delete('/:id/delete', produto_controller.produto_delete);

module.exports = router;
