/**

IPv4 Validator

Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.

Tests:
Waiting:1. isValidIPv4("192.168.1.1") should return true.
Waiting:2. isValidIPv4("0.0.0.0") should return true.
Waiting:3. isValidIPv4("255.01.50.111") should return false.
Waiting:4. isValidIPv4("255.00.50.111") should return false.
Waiting:5. isValidIPv4("256.101.50.115") should return false.
Waiting:6. isValidIPv4("192.168.101.") should return false.
Waiting:7. isValidIPv4("192168145213") should return false.

*/

export function isValidIPv4(ipv4) {
  const parts = ipv4.split('.');
  if (parts.length !== 4) return false;

  for (const part of parts) {
    if (!/^\d+$/.test(part)) return false;

    if (part.length > 1 && part[0] === '0') return false;

    const num = Number(part);
    if (num < 0 || num > 255) return false;
  }

  return true;
}
