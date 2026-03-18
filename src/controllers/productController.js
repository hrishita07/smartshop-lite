const productService = require('../services/productService');

function listProducts(req, res, next) {
  try {
    const q = req.query.q;
    const result = productService.listProducts({ q });
    res.json(result);
  } catch (err) { next(err); }
}

function getProduct(req, res, next) {
  try {
    const id = req.params.id;
    const product = productService.getProductById(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) { next(err); }
}

module.exports = { listProducts, getProduct };
