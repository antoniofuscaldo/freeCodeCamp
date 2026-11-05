import { describe, expect, it } from 'vitest';

import { extractAttributes } from '../2026-10-19.js';

describe('extractAttributes', () => {
  it('extractAttributes(\'<span class="red"></span>\') should return ["class, red"]', () => {
    expect(extractAttributes('<span class="red"></span>')).toEqual([
      'class, red',
    ]);
  });

  it('extractAttributes(\'<meta charset="UTF-8" />\') should return ["charset, UTF-8"]', () => {
    expect(extractAttributes('<meta charset="UTF-8" />')).toEqual([
      'charset, UTF-8',
    ]);
  });

  it('extractAttributes("<p>Lorem ipsum dolor sit amet</p>") should return []', () => {
    expect(extractAttributes('<p>Lorem ipsum dolor sit amet</p>')).toEqual([]);
  });

  it('extractAttributes(\'<input name="email" type="email" required="true" />\') should return ["name, email", "type, email", "required, true"]', () => {
    expect(
      extractAttributes('<input name="email" type="email" required="true" />'),
    ).toEqual(['name, email', 'type, email', 'required, true']);
  });

  it('extractAttributes(\'<button id="submit" class="btn btn-primary">Submit</button>\') should return ["id, submit", "class, btn btn-primary"]', () => {
    expect(
      extractAttributes(
        '<button id="submit" class="btn btn-primary">Submit</button>',
      ),
    ).toEqual(['id, submit', 'class, btn btn-primary']);
  });
});
