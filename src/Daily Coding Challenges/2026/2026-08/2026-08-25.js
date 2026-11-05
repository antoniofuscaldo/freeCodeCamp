/**

camelCase

Given a string, return its camel case version using the following rules:

Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.

Tests:
Waiting:1. toCamelCase("hello world") should return "helloWorld".
Waiting:2. toCamelCase("HELLO WORLD") should return "helloWorld".
Waiting:3. toCamelCase("secret agent-X") should return "secretAgentX".
Waiting:4. toCamelCase("FREE cODE cAMP") should return "freeCodeCamp".
Waiting:5. toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".

*/

export function toCamelCase(s) {
  if (!s) return '';

  return s
    .split(/[ _-]+/)
    .filter(Boolean)
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (i === 0) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}
