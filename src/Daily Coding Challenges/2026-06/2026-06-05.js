/**

Schema Validator Part 5

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}
The pipe (|) symbol means "or". role must be one of the listed Roles values.
The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
The brackets [] after string means that badges should be an array of strings (or empty).
Extra keys are allowed

*/

function isValidSchema(obj) {
  const roles = ['user', 'creator', 'moderator', 'staff', 'admin'];

  if (typeof obj.username !== 'string') return false;
  if (typeof obj.posts !== 'number') return false;
  if (typeof obj.verified !== 'boolean') return false;
  if (!roles.includes(obj.role)) return false;

  if (!Array.isArray(obj.badges)) return false;
  for (const b of obj.badges) if (typeof b !== 'string') return false;

  if ('supporter' in obj && typeof obj.supporter !== 'boolean') return false;

  return true;
}
