const cartService = require('../services/cartService');
const productService = require('../services/productService');

function addToCart(req, res, next) {
  try {
    const { productId, quantity } = req.body;
    const product = productService.getProductById(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    const item = cartService.addItem({ productId, quantity });
    res.status(201).json(item);
  } catch (err) { next(err); }
}

function removeFromCart(req, res, next) {
  try {
    const id = req.params.id;
    const removed = cartService.removeItem(id);
    if (!removed) return res.status(404).json({ error: 'Cart item not found' });
    res.json({ success: true, removed });
  } catch (err) { next(err); }
}

function listCart(req, res, next) {
  try {
    const items = cartService.listItems();
    res.json(items);
  } catch (err) { next(err); }
}

module.exports = { addToCart, removeFromCart, listCart };
