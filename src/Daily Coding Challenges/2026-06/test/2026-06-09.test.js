import { describe, expect, it } from 'vitest';

import { getRoommates } from '../2026-06-09.js';

describe('getRoommates', () => {
  it('getRoommates([{ "name": "Alice", "group": "A" }, { "name": "Bob", "group": "B" }, { "name": "Carol", "group": "A" }]) should return ["Alice and Carol", "Bob"]', () => {
    expect(
      getRoommates([
        { name: 'Alice', group: 'A' },
        { name: 'Bob', group: 'B' },
        { name: 'Carol', group: 'A' },
      ]),
    ).toEqual(['Alice and Carol', 'Bob']);
  });

  it('getRoommates([{ "name": "John", "group": "C" }, { "name": "Julia", "group": "C" }, { "name": "Jim", "group": "C" }]) should return ["John and Julia", "Jim"]', () => {
    expect(
      getRoommates([
        { name: 'John', group: 'C' },
        { name: 'Julia', group: 'C' },
        { name: 'Jim', group: 'C' },
      ]),
    ).toEqual(['John and Julia', 'Jim']);
  });

  it('getRoommates([{ "name": "Adam", "group": "D" }, { "name": "Abraham", "group": "E" }, { "name": "Austin", "group": "E" }, { "name": "Augustus", "group": "D" }, { "name": "Angelica", "group": "D" }, { "name": "Aaron", "group": "E" }]) should return ["Adam and Augustus", "Angelica", "Abraham and Austin", "Aaron"]', () => {
    expect(
      getRoommates([
        { name: 'Adam', group: 'D' },
        { name: 'Abraham', group: 'E' },
        { name: 'Austin', group: 'E' },
        { name: 'Augustus', group: 'D' },
        { name: 'Angelica', group: 'D' },
        { name: 'Aaron', group: 'E' },
      ]),
    ).toEqual(['Adam and Augustus', 'Angelica', 'Abraham and Austin', 'Aaron']);
  });

  it('getRoommates([{ "name": "Frank", "group": "A" }, { "name": "Emitt", "group": "B" }, { "name": "Daria", "group": "F" }, { "name": "Charles", "group": "D" }, { "name": "Bailey", "group": "A" }, { "name": "Albert", "group": "F" }]) should return ["Frank and Bailey", "Emitt", "Daria and Albert", "Charles"]', () => {
    expect(
      getRoommates([
        { name: 'Frank', group: 'A' },
        { name: 'Emitt', group: 'B' },
        { name: 'Daria', group: 'F' },
        { name: 'Charles', group: 'D' },
        { name: 'Bailey', group: 'A' },
        { name: 'Albert', group: 'F' },
      ]),
    ).toEqual(['Frank and Bailey', 'Emitt', 'Daria and Albert', 'Charles']);
  });

  it('getRoommates([{ "name": "Kevin", "group": "A" }, { "name": "Yuri", "group": "A" }, { "name": "Hugo", "group": "B" }, { "name": "Violet", "group": "A" }, { "name": "Brett", "group": "A" }, { "name": "Wayne", "group": "B" }]) should return ["Kevin and Yuri", "Violet and Brett", "Hugo and Wayne"]', () => {
    expect(
      getRoommates([
        { name: 'Kevin', group: 'A' },
        { name: 'Yuri', group: 'A' },
        { name: 'Hugo', group: 'B' },
        { name: 'Violet', group: 'A' },
        { name: 'Brett', group: 'A' },
        { name: 'Wayne', group: 'B' },
      ]),
    ).toEqual(['Kevin and Yuri', 'Violet and Brett', 'Hugo and Wayne']);
  });
});
