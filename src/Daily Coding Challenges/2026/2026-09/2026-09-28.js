/**

CSV Header Parser

Given the first line of a comma-separated values (CSV) file, return an array containing the headings.

The first line of a CSV file contains headings separated by commas.
Remove any leading or trailing whitespace from each heading.

Tests:
Waiting:1. getHeadings("name,age,city") should return ["name", "age", "city"].
Waiting:2. getHeadings("first name,last name,phone") should return ["first name", "last name", "phone"].
Waiting:3. getHeadings("username , email , signup date ") should return ["username", "email", "signup date"].

*/

export function getHeadings(csv) {
  return csv.split(',').map((h) => h.trim());
}
