/**

Digits vs Letters

Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

Digits consist of 0-9.
Letters consist of a-z in upper or lower case.
Ignore any other characters.

*/

function digitsOrLetters(str) {
  let digits = 0;
  let letters = 0;

  for (let char of str) {
    if (/[0-9]/.test(char)) {
      digits++;
    } else if (/[a-zA-Z]/.test(char)) {
      letters++;
    }
  }

  if (digits > letters) return "digits";
  if (letters > digits) return "letters";
  return "tie";
}
