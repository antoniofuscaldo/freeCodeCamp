/**

Database Migration

Given two database objects, return the second object with any missing properties from the first filled in.

Fields that already exist in the record should not be overwritten.

Tests:
Waiting:1. migrateRecord({ username: "", posts: 0 }, { verified: true }) should return { username: "", posts: 0, verified: true }.
Waiting:2. migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }) should return { username: "camper", posts: 5 }.
Waiting:3. migrateRecord({ username: "", posts: 0, verified: false }, { username: "camper" }) should return { username: "camper", posts: 0, verified: false }.
Waiting:4. migrateRecord({ username: "", posts: 0 }, { username: "camper", role: "admin" }) should return { username: "camper", role: "admin", posts: 0 }.
Waiting:5. migrateRecord({ username: "", email: "", posts: 0, verified: false, role: "user", banned: false }, { username: "camper", email: "camper@freecodecamp.org", role: "admin" }) should return { username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false }.

*/

export function migrateRecord(schema, record) {
  const res = { ...record };
  for (const k of Object.keys(schema)) if (!(k in res)) res[k] = schema[k];
  return res;
}
