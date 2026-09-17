import { describe, expect, it } from 'vitest';

import { capitalize } from '../2026-09-16.js';

describe('capitalize', () => {
  it('capitalize("this is a simple sentence.") should return "This is a simple sentence."', () => {
    expect(capitalize('this is a simple sentence.')).toEqual(
      'This is a simple sentence.',
    );
  });

  it('capitalize("hello world. how are you?") should return "Hello world. How are you?"', () => {
    expect(capitalize('hello world. how are you?')).toEqual(
      'Hello world. How are you?',
    );
  });

  it('capitalize("i did today\'s coding challenge... it was fun!!") should return "I did today\'s coding challenge... It was fun!!"', () => {
    expect(
      capitalize("i did today's coding challenge... it was fun!!"),
    ).toEqual("I did today's coding challenge... It was fun!!");
  });

  it('capitalize("crazy!!!strange???unconventional...sentences.") should return "Crazy!!!Strange???Unconventional...Sentences."', () => {
    expect(capitalize('crazy!!!strange???unconventional...sentences.')).toEqual(
      'Crazy!!!Strange???Unconventional...Sentences.',
    );
  });

  it('capitalize("there\'s a space before this period . why is there a space before that period ?") should return "There\'s a space before this period . Why is there a space before that period ?"', () => {
    expect(
      capitalize(
        "there's a space before this period . why is there a space before that period ?",
      ),
    ).toEqual(
      "There's a space before this period . Why is there a space before that period ?",
    );
  });
});
