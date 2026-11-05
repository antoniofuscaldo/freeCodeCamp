/**

Message Validator

Given a message string and a validation string, determine if the message is valid.

A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
Letters are case-insensitive.
Words in the message are separated by single spaces.

*/

function isValidMessage(message, validator) {
  const words = message.split(' ');
  if (words.length !== validator.length) return false;
  for (let i = 0; i < words.length; i++) {
    if (words[i][0].toLowerCase() !== validator[i].toLowerCase()) return false;
  }
  return true;
}
