var arrayToRotate = [1, 2, 3, 4, 5];
var k = 2;

var rotatedArray = (function(arr, rotations) {
  var len = arr.length;
  rotations %= len; // Ensure rotations don't exceed array length

  // Use slice and concat to create the rotated array
  return arr.slice(rotations).concat(arr.slice(0, rotations));
})(arrayToRotate, k);

console.log(rotatedArray);
