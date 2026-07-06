import { describe, expect, it } from 'vitest';

import { getAllergenFriendlyMeals } from '../2026-05-06.js';

describe('getAllergenFriendlyMeals', () => {
  it("getAllergenFriendlyMeals([[\"pasta\", [\"wheat\", \"milk\"]], [\"salad\", [\"nuts\"]]], [\"milk\"]) should return [\"salad\"]", () => {
    expect(getAllergenFriendlyMeals([["pasta", ["wheat", "milk"]], ["salad", ["nuts"]]], ["milk"])).toEqual(["salad"]);
  });

  it("getAllergenFriendlyMeals([[\"steak\", [\"soy\"]], [\"fried rice\", []], [\"fish tacos\", [\"fish\", \"wheat\"]], [\"chicken parmesan\", [\"wheat\", \"milk\"]]], [\"soy\", \"fish\"]) should return [\"fried rice\", \"chicken parmesan\"]", () => {
    expect(getAllergenFriendlyMeals([["steak", ["soy"]], ["fried rice", []], ["fish tacos", ["fish", "wheat"]], ["chicken parmesan", ["wheat", "milk"]]], ["soy", "fish"])).toEqual(["fried rice", "chicken parmesan"]);
  });

  it("getAllergenFriendlyMeals([[\"oatmeal\", [\"nuts\"]], [\"pancakes\", [\"wheat\", \"milk\"]], [\"granola\", []], [\"yogurt\", [\"milk\"]], [\"eggs\", [\"eggs\", \"milk\"]], [\"toast\", [\"wheat\"]]], [\"eggs\", \"milk\"]) should return [\"oatmeal\", \"granola\", \"toast\"]", () => {
    expect(getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["eggs", "milk"])).toEqual(["oatmeal", "granola", "toast"]);
  });

  it("getAllergenFriendlyMeals([[\"oatmeal\", [\"nuts\"]], [\"pancakes\", [\"wheat\", \"milk\"]], [\"granola\", []], [\"yogurt\", [\"milk\"]], [\"eggs\", [\"eggs\", \"milk\"]], [\"toast\", [\"wheat\"]]], [\"wheat\", \"nuts\"]) should return [\"granola\", \"yogurt\", \"eggs\"]", () => {
    expect(getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["wheat", "nuts"])).toEqual(["granola", "yogurt", "eggs"]);
  });
});
