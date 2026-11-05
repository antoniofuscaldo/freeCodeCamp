/**

Schema Validator Part 1

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{
  username: string
}
Extra keys are allowed

Tests:
Waiting:1. isValidSchema({ username: "bob" }) should return true.
Waiting:2. isValidSchema({ username: "jen", posts: 30 }) should return true.
Waiting:3. isValidSchema({ username: "" }) should return true.
Waiting:4. isValidSchema({ username: 7 }) should return false.
Waiting:5. isValidSchema({ posts: 25 }) should return false.

*/

export function isValidSchema(obj) {
  return typeof obj.username === 'string';
}
