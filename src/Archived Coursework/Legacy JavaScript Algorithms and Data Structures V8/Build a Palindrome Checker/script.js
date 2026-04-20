document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('text-input'),
    checkBtn = document.getElementById('check-btn'),
    result = document.getElementById('result');

  checkBtn.addEventListener('click', () => {
    // Get the input value
    const inputText = textInput.value;

    // Check if input is empty
    if (!inputText) {
      alert('Please input a value');
      return;
    }

    // Check if it's a palindrome
    const isPalindrome = checkPalindrome(inputText);

    // Display result
    result.textContent = `${inputText} is ${isPalindrome ? 'a' : 'not a'} palindrome`;
  });

  function checkPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
      // Check if the cleaned string is a palindrome
      reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
});
