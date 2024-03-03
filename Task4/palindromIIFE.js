var stringsArray = ["level", "hello", "civic", "world", "radar"];

var palindromes = (function(arr) {
  function isPalindrome(str) {
    var reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }

  var palindromeArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromeArr.push(arr[i]);
    }
  }

  return palindromeArr;
})(stringsArray);

console.log(palindromes);
