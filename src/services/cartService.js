let nextId = 1;
const items = []; // { id, productId, quantity, createdAt }

function addItem({ productId, quantity = 1 }) {
  if (!productId) throw Object.assign(new Error('productId is required'), { status: 400 });
  if (quantity <= 0) throw Object.assign(new Error('quantity must be > 0'), { status: 400 });
  const item = { id: String(nextId++), productId, quantity, createdAt: new Date().toISOString() };
  items.push(item);
  return item;
}

function removeItem(id) {
  const idx = items.findIndex(i => i.id === String(id));
  if (idx === -1) return null;
  const [removed] = items.splice(idx, 1);
  return removed;
}

function listItems() {
  return items.slice();
}

function clear() {
  items.length = 0;
  nextId = 1;
}

module.exports = { addItem, removeItem, listItems, clear };
