/**
 
String Mirror

Given two strings, determine if the second string is a mirror of the first.

A string is considered a mirror if it contains the same letters in reverse order.
Treat uppercase and lowercase letters as distinct.
Ignore all non-alphabetical characters.

*/

function isMirror(str1, str2) {
  let clean1 = str1.replace(/[^a-zA-Z]/g, "");
  let clean2 = str2.replace(/[^a-zA-Z]/g, "");
  let reversed1 = clean1.split("").reverse().join("");
  return reversed1 === clean2;
}
