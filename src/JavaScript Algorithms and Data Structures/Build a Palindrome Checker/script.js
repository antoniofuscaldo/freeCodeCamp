document.addEventListener('DOMContentLoaded', function () {
  const textInput = document.getElementById('text-input');
  const checkBtn = document.getElementById('check-btn');
  const result = document.getElementById('result');

  checkBtn.addEventListener('click', function () {
    const inputText = textInput.value;

    if (!inputText) {
      alert('Please input a value');
      return;
    }

    const isPalindrome = checkPalindrome(inputText);

    result.textContent = `${inputText} is ${isPalindrome ? 'a' : 'not a'} palindrome`;
  });

  function checkPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
});
