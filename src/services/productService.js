const Product = require('../models/product');

// In-memory product list
const products = [
  new Product({ id: 'p1', name: 'Widget A', description: 'Small widget', price: 9.99 }),
  new Product({ id: 'p2', name: 'Widget B', description: 'Bigger widget', price: 19.99 }),
  new Product({ id: 'p3', name: 'Gadget', description: 'Useful gadget', price: 14.5 })
];

function listProducts({ q } = {}) {
  if (q) {
    const term = String(q).toLowerCase();
    return products.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));
  }
  return products;
}

function getProductById(id) {
  return products.find(p => p.id === id) || null;
}

module.exports = { listProducts, getProductById, products };
