/**

Oldest Person

Given an array of objects, each with a "name" and "age" property, return an array containing the name of the oldest person.

If multiple people share the oldest age, return all of their names in the order they appear in the input.

*/

function getOldest(people) {
  const max = Math.max(...people.map((p) => p.age));
  return people.filter((p) => p.age === max).map((p) => p.name);
}
