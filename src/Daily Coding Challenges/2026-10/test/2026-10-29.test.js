import { describe, expect, it } from 'vitest';

import { sort } from '../2026-10-29.js';

describe('sort', () => {
  it('sort(["jill@mail.com", "john@example.com", "jane@example.com"]) should return ["jane@example.com", "john@example.com", "jill@mail.com"]', () => {
    expect(
      sort(['jill@mail.com', 'john@example.com', 'jane@example.com']),
    ).toEqual(['jane@example.com', 'john@example.com', 'jill@mail.com']);
  });

  it('sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]) should return ["bob@mail.com", "carol@mail.com", "alice@zoo.com"]', () => {
    expect(sort(['bob@mail.com', 'alice@zoo.com', 'carol@mail.com'])).toEqual([
      'bob@mail.com',
      'carol@mail.com',
      'alice@zoo.com',
    ]);
  });

  it('sort(["user@z.com", "user@y.com", "user@x.com"]) should return ["user@x.com", "user@y.com", "user@z.com"]', () => {
    expect(sort(['user@z.com', 'user@y.com', 'user@x.com'])).toEqual([
      'user@x.com',
      'user@y.com',
      'user@z.com',
    ]);
  });

  it('sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]) should return ["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"]', () => {
    expect(sort(['sam@MAIL.com', 'amy@mail.COM', 'bob@Mail.com'])).toEqual([
      'amy@mail.COM',
      'bob@Mail.com',
      'sam@MAIL.com',
    ]);
  });

  it('sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]) should return ["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"]', () => {
    expect(
      sort([
        'simon@beta.com',
        'sammy@alpha.com',
        'Sarah@Alpha.com',
        'SAM@ALPHA.com',
        'Simone@Beta.com',
        'sara@alpha.com',
      ]),
    ).toEqual([
      'SAM@ALPHA.com',
      'sammy@alpha.com',
      'sara@alpha.com',
      'Sarah@Alpha.com',
      'simon@beta.com',
      'Simone@Beta.com',
    ]);
  });
});
