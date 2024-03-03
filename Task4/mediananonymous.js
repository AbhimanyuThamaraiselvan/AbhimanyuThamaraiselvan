// Sample sorted arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 112];

// Combine and sort the arrays
const combinedArray = arr1.concat(arr2).sort((a, b) => a - b);

// Calculate the median using an anonymous function
const median = ((arr) => {
  const length = arr.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    // If the length is even, average the middle two elements
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    // If the length is odd, return the middle element
    return arr[mid];
  }
})(combinedArray);

// Output the result
console.log(median);
