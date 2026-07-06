import { describe, expect, it } from 'vitest';

import { getOldest } from '../2026-05-11.js';

describe('getOldest', () => {
  it("getOldest([{ name: \"Brenda\", age: 40 }]) should return [\"Brenda\"]", () => {
    expect(getOldest([{ name: "Brenda", age: 40 }])).toEqual(["Brenda"]);
  });

  it("getOldest([{ name: \"Alice\", age: 30 }, { name: \"Bob\", age: 25 }]) should return [\"Alice\"]", () => {
    expect(getOldest([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }])).toEqual(["Alice"]);
  });

  it("getOldest([{ name: \"Allison\", age: 25 }, { name: \"Bill\", age: 30 }, { name: \"Carol\", age: 30 }]) should return [\"Bill\", \"Carol\"]", () => {
    expect(getOldest([{ name: "Allison", age: 25 }, { name: "Bill", age: 30 }, { name: "Carol", age: 30 }])).toEqual(["Bill", "Carol"]);
  });

  it("getOldest([{ name: \"George\", age: 50 }, { name: \"Shirley\", age: 42 }, { name: \"Beth\", age: 48 }, { name: \"Holly\", age: 50 }, { name: \"Kevin\", age: 44 }, { name: \"Frank\", age: 47 }, { name: \"Zach\", age: 50 }, { name: \"Jennifer\", age: 43 }]) should return [\"George\", \"Holly\", \"Zach\"]", () => {
    expect(getOldest([{ name: "George", age: 50 }, { name: "Shirley", age: 42 }, { name: "Beth", age: 48 }, { name: "Holly", age: 50 }, { name: "Kevin", age: 44 }, { name: "Frank", age: 47 }, { name: "Zach", age: 50 }, { name: "Jennifer", age: 43 }])).toEqual(["George", "Holly", "Zach"]);
  });
});
