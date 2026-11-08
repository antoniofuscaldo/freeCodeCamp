import { describe, expect, it } from 'vitest';

import { canPost } from '../2026-11-08.js';

describe('canPost', () => {
  it('canPost("Hello world") should return "short post"', () => {
    expect(canPost('Hello world')).toEqual('short post');
  });

  it('canPost("This is a longer message but still under eighty characters.") should return "long post"', () => {
    expect(
      canPost('This is a longer message but still under eighty characters.'),
    ).toEqual('long post');
  });

  it('canPost("This message is too long to fit into either of the character limits for a social media post.") should return "invalid post"', () => {
    expect(
      canPost(
        'This message is too long to fit into either of the character limits for a social media post.',
      ),
    ).toEqual('invalid post');
  });
});
