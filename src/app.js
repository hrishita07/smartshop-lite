// src/app.js
// Simple Express app for SmartShop Lite
// Run:
//   npm init -y
//   npm install express
//   node src/app.js
// Then open: http://localhost:3000/products

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// In-memory sample product data
// Each product has: id (number), name (string), price (number)
const products = [
  { id: 1, name: "Basic T-shirt", price: 9.99 },
  { id: 2, name: "Coffee Mug", price: 7.5 },
  { id: 3, name: "Wireless Mouse", price: 19.99 },
];

// Middleware to parse JSON bodies (useful if you add POST/PUT later)
app.use(express.json());

// Root route - simple health/info
app.get("/", (req, res) => {
  res.send("SmartShop Lite API is running. Use /products to see the product list.");
});

// GET /products - return list of all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET /products/:id - return details for a single product
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Product id must be a number." });
  }

  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: `Product with id ${id} not found.` });
  }

  res.json(product);
});

// Basic 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`SmartShop Lite server started on port ${PORT}`);
});
