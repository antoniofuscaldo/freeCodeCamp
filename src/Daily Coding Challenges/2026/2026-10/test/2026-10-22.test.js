import { describe, expect, it } from 'vitest';

import { wiseSpeak } from '../2026-10-22.js';

describe('wiseSpeak', () => {
  it('wiseSpeak("You must speak wisely.") should return "Speak wisely, you must."', () => {
    expect(wiseSpeak('You must speak wisely.')).toEqual(
      'Speak wisely, you must.',
    );
  });

  it('wiseSpeak("You can do it!") should return "Do it, you can!"', () => {
    expect(wiseSpeak('You can do it!')).toEqual('Do it, you can!');
  });

  it('wiseSpeak("Do you think you will complete this?") should return "Complete this, do you think you will?"', () => {
    expect(wiseSpeak('Do you think you will complete this?')).toEqual(
      'Complete this, do you think you will?',
    );
  });

  it('wiseSpeak("All your base are belong to us.") should return "Belong to us, all your base are."', () => {
    expect(wiseSpeak('All your base are belong to us.')).toEqual(
      'Belong to us, all your base are.',
    );
  });

  it('wiseSpeak("You have much to learn.") should return "Much to learn, you have."', () => {
    expect(wiseSpeak('You have much to learn.')).toEqual(
      'Much to learn, you have.',
    );
  });
});
