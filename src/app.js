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

const PORT = process.env.PORT || 3000;

// In-memory sample product data
// Each product has: id (number), name (string), price (number)
// NOTE: This preserves the original sample products and adds one more example.
const products = [
  { id: 1, name: 'Basic T-shirt', price: 9.99 },
  { id: 2, name: 'Coffee Mug', price: 7.5 },
  { id: 3, name: 'Wireless Mouse', price: 19.99 },
  { id: 4, name: 'Notebook', price: 4.25 }
];

// Middleware to parse JSON bodies (useful if you add POST/PUT later)
app.use(express.json());

// Root route - simple health/info message
app.get('/', (req, res) => {
  res.send('SmartShop Lite API is running. Use /products to see the product list.');
});

// GET /products - return list of all products
app.get('/products', (req, res) => {
  // For beginners: we just return the in-memory array as JSON
  res.json(products);
});

// GET /products/:id - return details for a single product
app.get('/products/:id', (req, res) => {
  // Convert id from string to number
  const id = Number(req.params.id);

  // Validate id is a valid number
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Product id must be a number.' });
  }

  // Find product by id
  const product = products.find(p => p.id === id);

  // If not found, return 404
  if (!product) {
    return res.status(404).json({ error: `Product with id ${id} not found.` });
  }

  // Return the product as JSON
  res.json(product);
});

// Basic 404 handler for unknown routes (should be added after other routes)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`SmartShop Lite server started on port ${PORT}`);
});