# SmartShop Lite

Lightweight eCommerce starter app (SmartShop Lite).

Quick start

1. Install dependencies:

```bash
npm install
```

2. Copy environment file and run:

```bash
cp .env.example .env
npm start
```

3. API endpoints

- `GET /products` - list products
- `GET /products/:id` - product details
- `POST /cart` - add item to cart (JSON: { "productId": "p1", "quantity": 1 })
- `DELETE /cart/:id` - remove cart item

Testing

```bash
npm test
```

Docs: See `docs/api.md` for API details.

Folder structure

```
/
	package.json
	.env.example
	README.md
	/src
		/controllers
		/services
		/models
		/routes
		index.js
		app.js
	/tests
	/docs
	/.github/workflows
```

If you want, I can run the tests or start the app in the container — tell me to proceed.