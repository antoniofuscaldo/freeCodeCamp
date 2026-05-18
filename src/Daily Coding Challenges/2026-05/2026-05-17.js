/**

Mongo ID Date

Given a MongoDB ID string, return its creation time as an ISO 8601 string.

A MongoDB ID is a 24-character hex string. The first 8 characters represent a Unix timestamp (in seconds) encoded as a base-16 integer.
For example, "6a094b50bcf86cd799439011" has a timestamp of "6a094b50" in hex, which is 1778994000 in decimal, representing a creation time of "2026-05-17T05:00:00.000Z".

*/

function mongoIdToDate(id) {
  const ts = parseInt(id.slice(0, 8), 16) * 1000;
  return new Date(ts).toISOString();
}
