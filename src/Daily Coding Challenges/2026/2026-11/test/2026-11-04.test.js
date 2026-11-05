import { describe, expect, it } from 'vitest';

import { imageSearch } from '../2026-11-04.js';

describe('imageSearch', () => {
  it('imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog") should return ["dog.png"]', () => {
    expect(imageSearch(['dog.png', 'cat.jpg', 'parrot.jpeg'], 'dog')).toEqual([
      'dog.png',
    ]);
  });

  it('imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun") should return ["Sunset.jpg", "sunflower.jpeg"]', () => {
    expect(
      imageSearch(['Sunset.jpg', 'Beach.png', 'sunflower.jpeg'], 'sun'),
    ).toEqual(['Sunset.jpg', 'sunflower.jpeg']);
  });

  it('imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG") should return ["Moon.png", "stars.png"]', () => {
    expect(imageSearch(['Moon.png', 'sun.jpeg', 'stars.png'], 'PNG')).toEqual([
      'Moon.png',
      'stars.png',
    ]);
  });

  it('imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat") should return ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]', () => {
    expect(
      imageSearch(
        [
          'cat.jpg',
          'dogToy.jpeg',
          'kitty-cat.png',
          'catNip.jpeg',
          'franken_cat.gif',
        ],
        'Cat',
      ),
    ).toEqual(['cat.jpg', 'kitty-cat.png', 'catNip.jpeg', 'franken_cat.gif']);
  });
});
