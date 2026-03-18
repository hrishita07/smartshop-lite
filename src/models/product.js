class Product {
  constructor({ id, name, description = '', price = 0, imageUrl = '' }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

module.exports = Product;
