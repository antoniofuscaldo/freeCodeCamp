/**

Morse Code

Given a Morse code string, return the decoded message using the following table:

Code	Letter	Code	Letter
.-	A	-.	N
-...	B	---	O
-.-.	C	.--.	P
-..	D	--.-	Q
.	E	.-.	R
..-.	F	...	S
--.	G	-	T
....	H	..-	U
..	I	...-	V
.---	J	.--	W
-.-	K	-..-	X
.-..	L	-.--	Y
--	M	--..	Z
Letters are separated by a single space
Words are separated by three spaces

Tests:
Waiting:1. decodeMorse("--..") should return "Z".
Waiting:2. decodeMorse("... --- ...") should return "SOS".
Waiting:3. decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--.") should return "FREECODECAMP".
Waiting:4. decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..") should return "HELLO WORLD".
Waiting:5. decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.") should return "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG".

*/

export function decodeMorse(code) {
  const table = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
  };

  return code
    .trim()
    .split('   ')
    .map((word) =>
      word
        .split(' ')
        .filter(Boolean)
        .map((symbol) => table[symbol] || '')
        .join(''),
    )
    .join(' ');
}
