
const stringsArray = ["level", "hello", "radar", "world", "madam"];

const isPalindrome = function (str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

// Use filter with an anonymous function to get palindromes
const palindromeArray = stringsArray.filter(function (str) {
  return isPalindrome(str);
});

// Output the result
console.log(palindromeArray);
