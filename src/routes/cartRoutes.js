const express = require('express');
const controller = require('../controllers/cartController');
const { requireFields } = require('../middleware/validate');

const router = express.Router();

router.get('/', controller.listCart);
router.post('/', requireFields(['productId', 'quantity']), controller.addToCart);
router.delete('/:id', controller.removeFromCart);

module.exports = router;
