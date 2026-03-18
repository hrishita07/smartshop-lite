const cartService = require('../src/services/cartService');

beforeEach(() => cartService.clear());

describe('CartService', () => {
  test('addItem adds and returns an item', () => {
    const item = cartService.addItem({ productId: 'p1', quantity: 2 });
    expect(item).toHaveProperty('id');
    expect(item.productId).toBe('p1');
    expect(item.quantity).toBe(2);
  });

  test('addItem rejects invalid input', () => {
    expect(() => cartService.addItem({ productId: null, quantity: 1 })).toThrow();
    expect(() => cartService.addItem({ productId: 'p1', quantity: 0 })).toThrow();
  });

  test('removeItem removes an existing item', () => {
    const it = cartService.addItem({ productId: 'p2', quantity: 1 });
    const removed = cartService.removeItem(it.id);
    expect(removed).not.toBeNull();
    expect(removed.id).toBe(it.id);
  });

  test('removeItem returns null for missing id', () => {
    const removed = cartService.removeItem('nope');
    expect(removed).toBeNull();
  });
});
