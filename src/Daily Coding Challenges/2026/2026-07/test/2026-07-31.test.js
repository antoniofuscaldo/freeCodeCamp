import { describe, expect, it } from 'vitest';

import { decodeMorse } from '../2026-07-31.js';

describe('decodeMorse', () => {
  it('decodeMorse("--..") should return "Z"', () => {
    expect(decodeMorse('--..')).toEqual('Z');
  });

  it('decodeMorse("... --- ...") should return "SOS"', () => {
    expect(decodeMorse('... --- ...')).toEqual('SOS');
  });

  it('decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--.") should return "FREECODECAMP"', () => {
    expect(decodeMorse('..-. .-. . . -.-. --- -.. . -.-. .- -- .--.')).toEqual(
      'FREECODECAMP',
    );
  });

  it('decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..") should return "HELLO WORLD"', () => {
    expect(decodeMorse('.... . .-.. .-.. ---   .-- --- .-. .-.. -..')).toEqual(
      'HELLO WORLD',
    );
  });

  it('decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.") should return "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"', () => {
    expect(
      decodeMorse(
        '- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.',
      ),
    ).toEqual('THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG');
  });
});
