/**

Pounds to Kilograms

Given a weight in pounds as a number, return the string "(lbs) pounds equals (kgs) kilograms.".

Replace "(lbs)" with the input number.
Replace "(kgs)" with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
1 pound equals 0.453592 kilograms.
If the input is 1, use "pound" instead of "pounds".
If the converted value is 1, use "kilogram" instead of "kilograms".

*/

function convertToKgs(lbs) {
  const kgs = (lbs * 0.453592).toFixed(2),
    poundWord = lbs === 1 ? 'pound' : 'pounds',
    kiloWord = kgs === '1.00' ? 'kilogram' : 'kilograms';
  return `${lbs} ${poundWord} equals ${kgs} ${kiloWord}.`;
}
