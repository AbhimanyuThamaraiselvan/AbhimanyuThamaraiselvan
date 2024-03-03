
let stringArray = ["hello world", "javascript is awesome", "title case example"];

// Convert strings to title case using an anonymous function
let titleCaseArray = stringArray.map(function (str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
});

// Output the result
console.log(titleCaseArray);
