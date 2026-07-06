/**

Oldest Person

Given an array of objects, each with a "name" and "age" property, return an array containing the name of the oldest person.

If multiple people share the oldest age, return all of their names in the order they appear in the input.

Tests:
Waiting:1. getOldest([{ name: "Brenda", age: 40 }]) should return ["Brenda"].
Waiting:2. getOldest([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]) should return ["Alice"].
Waiting:3. getOldest([{ name: "Allison", age: 25 }, { name: "Bill", age: 30 }, { name: "Carol", age: 30 }]) should return ["Bill", "Carol"].
Waiting:4. getOldest([{ name: "George", age: 50 }, { name: "Shirley", age: 42 }, { name: "Beth", age: 48 }, { name: "Holly", age: 50 }, { name: "Kevin", age: 44 }, { name: "Frank", age: 47 }, { name: "Zach", age: 50 }, { name: "Jennifer", age: 43 }]) should return ["George", "Holly", "Zach"].

*/

export function getOldest(people) {
  const max = Math.max(...people.map((p) => p.age));
  return people.filter((p) => p.age === max).map((p) => p.name);
}
