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

*/

function makeLeet(str) {
  const m = { a: '4', e: '3', g: '9', i: '1', l: '1', o: '0', s: '5', t: '7' };
  return str.replace(/[aegilost]/g, (c) => m[c]);
}
