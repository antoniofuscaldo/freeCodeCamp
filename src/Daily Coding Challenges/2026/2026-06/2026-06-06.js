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

Tests:
Waiting:1. isValidSchema({ users: [{ username: "ron", posts: 14, verified: true, role: "creator", badges: [ "early-adopter" ]}, { username: "cher", posts: 25, verified: true, role: "moderator", supporter: true, followers: 20, badges: [ "helper" ]}]}) should return true.
Waiting:2. isValidSchema({ users: [] }) should return true.
Waiting:3. isValidSchema({ users: { username: "anne", posts: 0, verified: false, role: "user", supporter: false, badges: []}}) should return false.
Waiting:4. isValidSchema({ users: [{ username: "tony", posts: 10, verified: true, role: "creator", supporter: true, badges: ["liked", 6]}]}) should return false.
Waiting:5. isValidSchema({ users: [{ username: "ursula", posts: 3, verified: false, role: "user", supporter: "false", badges: ["comeback"]}]}) should return false.
Waiting:6. isValidSchema({ users: [{ username: "benny", posts: 55, verified: true, role: "superstar", supporter: true, badges: ["veteran"]}]}) should return false.
Waiting:7. isValidSchema({ users: [{ username: "chase", posts: 1, verified: "yes", role: "staff", supporter: false, badges: ["superstar"]}]}) should return false.
Waiting:8. isValidSchema({ users: [{ username: "carla", posts: "10", verified: false, role: "user", supporter: false, badges: ["newbie"]}]}) should return false.
Waiting:9. isValidSchema({ users: [{ posts: 4, verified: false, role: "admin", supporter: false, badges: ["superuser", "veteran"]}]}) should return false.
Waiting:10. isValidSchema({ users: [{ username: "harold", posts: 80, verified: true, role: "creator", supporter: true, badges: ["liked", "hero"]}, { username: "kim", posts: 11, verified: false, role: "admin", supporter: true, badges: ["first"]}, {}]}) should return false.

*/

export function isValidSchema(obj) {
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
