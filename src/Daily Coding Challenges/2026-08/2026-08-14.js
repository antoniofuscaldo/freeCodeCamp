/**

S P A C E J A M

Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

Non-alphabetical characters should remain unchanged (except for spaces).

Tests:
Waiting:1. spaceJam("freeCodeCamp") should return "F  R  E  E  C  O  D  E  C  A  M  P".
Waiting:2. spaceJam("   free   Code   Camp   ") should return "F  R  E  E  C  O  D  E  C  A  M  P".
Waiting:3. spaceJam("Hello World?!") should return "H  E  L  L  O  W  O  R  L  D  ?  !".
Waiting:4. spaceJam("C@t$ & D0g$") should return "C  @  T  $  &  D  0  G  $".
Waiting:5. spaceJam("allyourbase") should return "A  L  L  Y  O  U  R  B  A  S  E".

*/

export function spaceJam(s) {
  const compact = s.replace(/\s+/g, '');
  return compact
    .split('')
    .map((ch) => (/[a-z]/i.test(ch) ? ch.toUpperCase() : ch))
    .join('  ');
}
