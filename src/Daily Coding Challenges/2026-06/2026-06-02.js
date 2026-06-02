/**

Schema Validator Part 2

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{
  username: string,
  posts: number,
  verified: boolean
}
Extra keys are allowed

*/

function isValidSchema(obj) {
  return (
    typeof obj.username === 'string' &&
    typeof obj.posts === 'number' &&
    typeof obj.verified === 'boolean'
  );
}
