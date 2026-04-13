/**

Name Initials

Given a full name as a string, return their initials.

Names to initialize are separated by a space.
Initials should be made uppercase.
Initials should be separated by dots.
For example, "Tommy Millwood" returns "T.M.".

*/

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0].toUpperCase() + '.')
    .join('');
}
