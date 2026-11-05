/**

1337 Speak

Given a lowercase string, return it translated into leet speak by replacing the letters below with their leet substitutions:

Letter	Leet
a	4
e	3
g	9
i	1
l	1
o	0
s	5
t	7
Characters with no substitution are left unchanged.

Tests:
Waiting:1. makeLeet("cool") should return "c001".
Waiting:2. makeLeet("leet") should return "1337".
Waiting:3. makeLeet("hacker") should return "h4ck3r".
Waiting:4. makeLeet("satellite") should return "547311173".
Waiting:5. makeLeet("abcdefghijklmnopqrstuvwxyz") should return "4bcd3f9h1jk1mn0pqr57uvwxyz".

*/

export function makeLeet(str) {
  const m = { a: '4', e: '3', g: '9', i: '1', l: '1', o: '0', s: '5', t: '7' };
  return str.replace(/[aegilost]/g, (c) => m[c]);
}
