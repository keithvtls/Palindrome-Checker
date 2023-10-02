function isPalindrome(str) {
  // Check if the input is not a string
  if (typeof str !== 'string') {
    console.log(`The given value: '${str}' is not a string! The expected data type of the value is string`);
    return;
  }

  // Remove spaces and convert to lowercase for accurate palindrome check
  str = str.toLowerCase().replace(/\s/g, '');

  // Reverse string
  const reversedStr = str.split('').reverse().join('');

  // Check if the original string is equal to the reversed string
  if (str === reversedStr) {
    console.log(`The given string: '${str}' is an example of a palindrome, the reversed value is: '${reversedStr}'`);
  } else {
    console.log(`The given string: '${str}' is not an example of a palindrome`);
  }
}

// Call the function and pass an argument
isPalindrome("level"); // Example of a palindrome
isPalindrome("hello");   // Not a palindrome
isPalindrome(12321);     // Not a string
