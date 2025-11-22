document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('text-input'),
    checkBtn = document.getElementById('check-btn'),
    result = document.getElementById('result');

  checkBtn.addEventListener('click', () => {
    const inputText = textInput.value;

    if (!inputText) {
      alert('Please input a value');
      return;
    }

    const isPalindrome = checkPalindrome(inputText);

    result.textContent = `${inputText} is ${isPalindrome ? 'a' : 'not a'} palindrome`;
  });

  function checkPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
      reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
});
