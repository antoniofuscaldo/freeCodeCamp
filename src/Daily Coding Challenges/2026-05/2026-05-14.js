/**

Mirror Image

Given two strings, determine if the second string is a mirror image of the first.

A mirror image is formed by reversing the string and replacing each character with its mirror equivalent.

Symmetric characters look like themselves in a mirror:
W, T, Y, U, I, O, H, A, X, V, M, w, o, x, v, 0, 8, =, +, :, |, -, _, *, ^, !, ., and the space ( ).

Mirrored pairs swap with each other in a mirror:
Character	Swaps with
[	]
{	}
<	>
b	d
p	q
(	)
If either string includes a character not in the lists above, it doesn't have mirror image that can be created from the characters.

For example, the mirrored image of "[HOW]" is "[WOH]".

Tests:
Waiting:1. isMirrorImage("[HOW]", "[WOH]") should return true.
Waiting:2. isMirrorImage("MOM", "MOM") should return true.
Waiting:3. isMirrorImage("vow", "wov") should return true.
Waiting:4. isMirrorImage("TIM", "TIM") should return false.
Waiting:5. isMirrorImage("{WOW}", "}WOW{") should return false.
Waiting:6. isMirrorImage("XXVII", "IIV%X") should return false.
Waiting:7. isMirrorImage("><(((*>", "<*)))><") should return true.
Waiting:8. isMirrorImage("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW") should return true.

*/

export function isMirrorImage(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = {
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
    '<': '>',
    '>': '<',
    '(': ')',
    ')': '(',
    b: 'd',
    d: 'b',
    p: 'q',
    q: 'p',
  };

  const same = new Set([
    'W',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'H',
    'A',
    'X',
    'V',
    'M',
    'w',
    'o',
    'x',
    'v',
    '0',
    '8',
    '=',
    '+',
    ':',
    '|',
    '-',
    '_',
    '*',
    '^',
    '!',
    '.',
    ' ',
  ]);

  for (let i = 0, j = str1.length - 1; i < str2.length; i++, j--) {
    const a = str1[j];
    const b = str2[i];

    if (map[a]) {
      if (map[a] !== b) return false;
    } else if (same.has(a)) {
      if (a !== b) return false;
    } else {
      return false;
    }
  }

  return true;
}
