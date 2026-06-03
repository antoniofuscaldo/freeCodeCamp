/**

Schema Validator Part 3

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles
}
The pipe (|) symbol means "or". role must be one of the listed Roles values.
Extra keys are allowed

*/

function isValidSchema(obj) {
  const roles = ['user', 'creator', 'moderator', 'staff', 'admin'];
  return (
    typeof obj.username === 'string' &&
    typeof obj.posts === 'number' &&
    typeof obj.verified === 'boolean' &&
    roles.includes(obj.role)
  );
}
