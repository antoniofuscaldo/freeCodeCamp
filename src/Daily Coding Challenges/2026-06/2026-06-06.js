/**

Schema Validator Part 6

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

UserProfile = {
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}

{
  users: UserProfile[]
}
The pipe (|) symbol means "or". role must be one of the listed Roles values.
The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
UserProfile[] denotes an array of UserProfile objects. An empty array is valid.
Extra keys are allowed

*/

function isValidSchema(obj) {
  const roles = ['user', 'creator', 'moderator', 'staff', 'admin'];

  if (!Array.isArray(obj.users)) return false;

  for (const u of obj.users) {
    if (typeof u.username !== 'string') return false;
    if (typeof u.posts !== 'number') return false;
    if (typeof u.verified !== 'boolean') return false;
    if (!roles.includes(u.role)) return false;

    if (!Array.isArray(u.badges)) return false;
    for (const b of u.badges) if (typeof b !== 'string') return false;

    if ('supporter' in u && typeof u.supporter !== 'boolean') return false;
  }

  return true;
}
