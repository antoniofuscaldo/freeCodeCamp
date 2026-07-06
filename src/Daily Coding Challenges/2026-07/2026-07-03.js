/**

Database Migration

Given two database objects, return the second object with any missing properties from the first filled in.

Fields that already exist in the record should not be overwritten.

*/

function migrateRecord(schema, record) {
  const res = { ...record };
  for (const k of Object.keys(schema)) if (!(k in res)) res[k] = schema[k];
  return res;
}
