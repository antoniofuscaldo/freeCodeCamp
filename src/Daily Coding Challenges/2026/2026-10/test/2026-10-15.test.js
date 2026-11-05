import { describe, expect, it } from 'vitest';

import { stripTags } from '../2026-10-15.js';

describe('stripTags', () => {
  it('stripTags(\'<a href="#">Click here</a>\') should return "Click here"', () => {
    expect(stripTags('<a href="#">Click here</a>')).toEqual('Click here');
  });

  it('stripTags(\'<p class="center">Hello <b>World</b>!</p>\') should return "Hello World!"', () => {
    expect(stripTags('<p class="center">Hello <b>World</b>!</p>')).toEqual(
      'Hello World!',
    );
  });

  it('stripTags(\'<img src="cat.jpg" alt="Cat">\') should return an empty string ("")', () => {
    expect(stripTags('<img src="cat.jpg" alt="Cat">')).toEqual('');
  });

  it('stripTags(\'<main id="main"><section class="section">section</section><section class="section">section</section></main>\') should return sectionsection', () => {
    expect(
      stripTags(
        '<main id="main"><section class="section">section</section><section class="section">section</section></main>',
      ),
    ).toEqual('sectionsection');
  });
});
