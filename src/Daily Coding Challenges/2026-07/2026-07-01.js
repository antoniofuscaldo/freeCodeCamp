/**

Lucky Number

Given a string of a person's first and last name, calculate their lucky number using the following rules:

First and last names are separated by a space
Find the vowel and consonant count for each name
Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
Do the same for the two larger counts and the larger name
Subtract the smaller value from the larger one to get their lucky number
If the final value is zero (0), return 13.

*/

function getLuckyNumber(name) {
  const [a, b] = name.trim().split(' ').filter(Boolean);
  const count = (s) => {
    const v = s.match(/[aeiou]/gi) || [];
    const c = s.match(/[a-z]/gi) || [];
    return { v: v.length, c: c.length - v.length, len: s.length };
  };
  const x = count(a),
    y = count(b);
  const smallV = Math.min(x.v, y.v),
    smallC = Math.min(x.c, y.c),
    smallL = Math.min(x.len, y.len);
  const largeV = Math.max(x.v, y.v),
    largeC = Math.max(x.c, y.c),
    largeL = Math.max(x.len, y.len);
  const smallVal = smallV * smallC * smallL;
  const largeVal = largeV * largeC * largeL;
  const res = largeVal - smallVal;
  return res === 0 ? 13 : res;
}
