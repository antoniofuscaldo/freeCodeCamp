/**

Sum the Letters

Given a string, return the sum of its letters.

Letters are A-Z in uppercase or lowercase
Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
Uppercase and lowercase letters have the same value.
Ignore all non-letter characters.

*/

const sumLetters = (s) =>
  [...s].reduce(
    (a, c) =>
      a +
      (c >= 'A' && c <= 'Z'
        ? c.charCodeAt(0) - 64
        : c >= 'a' && c <= 'z'
          ? c.charCodeAt(0) - 96
          : 0),
    0,
  );
