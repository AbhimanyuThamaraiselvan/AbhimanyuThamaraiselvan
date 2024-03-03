var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];

var median = (function(arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  var length = mergedArray.length;
  var midIndex = length / 2;

  if (length % 2 === 0) {
    // If the array length is even, return the average of the middle two elements
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  } else {
    // If the array length is odd, return the middle element
    return mergedArray[Math.floor(midIndex)];
  }
})(array1, array2);

console.log(median);
