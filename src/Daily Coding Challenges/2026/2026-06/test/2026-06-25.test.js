import { describe, expect, it } from 'vitest';

import { parseFrontmatter } from '../2026-06-25.js';

describe('parseFrontmatter', () => {
  it('parseFrontmatter("---\\ntitle: My Post\\ndraft: false\\nviews: 100\\n---") should return { title: "My Post", draft: false, views: 100 }', () => {
    expect(
      parseFrontmatter('---\ntitle: My Post\ndraft: false\nviews: 100\n---'),
    ).toEqual({ title: 'My Post', draft: false, views: 100 });
  });

  it('parseFrontmatter("---\\nid: 6a174db57256a112f932195c\\ntitle: My Book\\nlocale: en\\nwordCount: 10000\\npublished: false\\n---") should return { id: "6a174db57256a112f932195c", title: "My Book", locale: "en", wordCount: 10000, published: false }', () => {
    expect(
      parseFrontmatter(
        '---\nid: 6a174db57256a112f932195c\ntitle: My Book\nlocale: en\nwordCount: 10000\npublished: false\n---',
      ),
    ).toEqual({
      id: '6a174db57256a112f932195c',
      title: 'My Book',
      locale: 'en',
      wordCount: 10000,
      published: false,
    });
  });

  it('parseFrontmatter("---\\nversion: 1.0.0\\nurl: https://example.com\\nprivate: true\\n---") should return { version: "1.0.0", url: "https://example.com", private: true }', () => {
    expect(
      parseFrontmatter(
        '---\nversion: 1.0.0\nurl: https://example.com\nprivate: true\n---',
      ),
    ).toEqual({ version: '1.0.0', url: 'https://example.com', private: true });
  });

  it('parseFrontmatter("---\\nrating: 4.5\\nprice: 9.99\\n---") should return { rating: 4.5, price: 9.99 }', () => {
    expect(parseFrontmatter('---\nrating: 4.5\nprice: 9.99\n---')).toEqual({
      rating: 4.5,
      price: 9.99,
    });
  });
});
