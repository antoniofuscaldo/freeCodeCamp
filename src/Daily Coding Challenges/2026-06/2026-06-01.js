/**

Schema Validator Part 1

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{
  username: string
}
Extra keys are allowed

*/

function isValidSchema(obj) {
  return typeof obj.username === 'string';
}
