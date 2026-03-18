const productService = require('../src/services/productService');

describe('ProductService', () => {
  test('listProducts returns all when no query', () => {
    const all = productService.listProducts();
    expect(Array.isArray(all)).toBe(true);
    expect(all.length).toBeGreaterThanOrEqual(3);
  });

  test('listProducts filters by query', () => {
    const matches = productService.listProducts({ q: 'widget' });
    expect(matches.every(p => /widget/i.test(p.name) || /widget/i.test(p.description))).toBe(true);
  });

  test('getProductById returns product or null', () => {
    const p = productService.getProductById('p1');
    expect(p).not.toBeNull();
    expect(p.id).toBe('p1');
    const missing = productService.getProductById('no-such');
    expect(missing).toBeNull();
  });
});
