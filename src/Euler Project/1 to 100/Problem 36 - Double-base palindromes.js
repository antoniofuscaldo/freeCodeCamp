function doubleBasePalindromes(n) {
  function isPalindrome(s) {
    return s === s.split('').reverse().join('');
  }
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (isPalindrome(String(i)) && isPalindrome(i.toString(2))) {
      sum += i;
    }
  }
  return sum;
}

doubleBasePalindromes(1000000);
