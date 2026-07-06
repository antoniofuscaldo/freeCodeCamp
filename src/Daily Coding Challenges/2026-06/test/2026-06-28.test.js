import { describe, expect, it } from 'vitest';

import { connectThree } from '../2026-06-28.js';

describe('connectThree', () => {
  it('connectThree([["", "", "", ""], ["", "", "", ""], ["", "Y", "", ""], ["Y", "R", "R", "R"]]) should return ["R", [3, 1], [3, 2], [3, 3]]', () => {
    expect(
      connectThree([
        ['', '', '', ''],
        ['', '', '', ''],
        ['', 'Y', '', ''],
        ['Y', 'R', 'R', 'R'],
      ]),
    ).toEqual(['R', [3, 1], [3, 2], [3, 3]]);
  });

  it('connectThree([["", "", "", ""], ["", "Y", "Y", ""], ["", "Y", "R", "R"], ["", "Y", "R", "R"]]) should return ["Y", [1, 1], [2, 1], [3, 1]]', () => {
    expect(
      connectThree([
        ['', '', '', ''],
        ['', 'Y', 'Y', ''],
        ['', 'Y', 'R', 'R'],
        ['', 'Y', 'R', 'R'],
      ]),
    ).toEqual(['Y', [1, 1], [2, 1], [3, 1]]);
  });

  it('connectThree([["", "", "Y", "R"], ["", "Y", "R", "Y"], ["", "R", "Y", "R"], ["", "R", "Y", "R"]]) should return ["R", [0, 3], [1, 2], [2, 1]]', () => {
    expect(
      connectThree([
        ['', '', 'Y', 'R'],
        ['', 'Y', 'R', 'Y'],
        ['', 'R', 'Y', 'R'],
        ['', 'R', 'Y', 'R'],
      ]),
    ).toEqual(['R', [0, 3], [1, 2], [2, 1]]);
  });

  it('connectThree([["", "Y", "", ""], ["", "Y", "Y", ""], ["", "R", "R", "Y"], ["R", "R", "Y", "R"]]) should return ["Y", [0, 1], [1, 2], [2, 3]]', () => {
    expect(
      connectThree([
        ['', 'Y', '', ''],
        ['', 'Y', 'Y', ''],
        ['', 'R', 'R', 'Y'],
        ['R', 'R', 'Y', 'R'],
      ]),
    ).toEqual(['Y', [0, 1], [1, 2], [2, 3]]);
  });

  it('connectThree([["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"], ["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"]]) should return []', () => {
    expect(
      connectThree([
        ['Y', 'R', 'R', 'Y'],
        ['R', 'Y', 'Y', 'R'],
        ['Y', 'R', 'R', 'Y'],
        ['R', 'Y', 'Y', 'R'],
      ]),
    ).toEqual([]);
  });
});
