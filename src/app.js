// src/app.js
// SmartShop Lite - Simple Node.js + Express example (single-file, beginner-friendly)
//
// To run locally:
//   1. npm init -y
//   2. npm install express
//   3. node src/app.js
// Then open in your browser: http://localhost:3000/products

const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

/**
 * Sample in-memory product data
 * In real applications, this would come from a database
 */
const products = [
  { id: 1, name: "iPhone", price: 800 },
  { id: 2, name: "Samsung Galaxy", price: 700 },
  { id: 3, name: "Laptop", price: 1200 },
  { id: 4, name: "Headphones", price: 150 }
];

/**
 * In-memory shopping cart
 */
let cart = [];

/**
 * GET /products
 * Returns all products or filters them by search query
 */
app.get('/products', (req, res) => {
  const { search } = req.query;

  if (search) {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    return res.json(filteredProducts);
  }

  res.json(products);
});

/**
 * GET /products/:id
 * Returns a single product by ID
 */
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

/**
 * POST /cart
 * Adds a product to the cart
 */
app.post('/cart', (req, res) => {
  const { id } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  cart.push(product);

  res.json({
    message: "Product added to cart",
    cart
  });
});

/**
 * DELETE /cart/:id
 * Removes a product from the cart
 */
app.delete('/cart/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  cart = cart.filter(item => item.id !== productId);

  res.json({
    message: "Product removed from cart",
    cart
  });
});

/**
 * GET /cart
 * Returns all items in the cart
 */
app.get('/cart', (req, res) => {
  res.json(cart);
});

/**
 * Start the server
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SmartShop Lite server running on port ${PORT}`);
});
