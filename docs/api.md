# API Documentation

Base path: `/api`

- `GET /products`
  - Query: `q` optional search term
  - Response: list of products

- `GET /products/:id`
  - Response: product object or 404

- `GET /cart`
  - Response: list of cart items

- `POST /cart`
  - Body: `{ "productId": "p1", "quantity": 1 }`
  - Response: created cart item

- `DELETE /cart/:id`
  - Response: success or 404

All responses are JSON. Error responses include `{ "error": "message" }`.
