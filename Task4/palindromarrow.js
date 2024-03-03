// Sample array of strings
const stringsArray = ["level", "hello", "radar", "world", "madam"];

// Arrow function to check if a string is a palindrome
const isPalindrome = str => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

// Use filter with an arrow function to get palindromes
const palindromeArray = stringsArray.filter(str => isPalindrome(str));

// Output the result
console.log(palindromeArray);
