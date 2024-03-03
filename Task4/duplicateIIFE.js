var arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 3];

var uniqueArray = (function(arr) {
  var uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
})(arrayWithDuplicates);

console.log(uniqueArray);
