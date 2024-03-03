// Sample array of numbers
const numbersArray = [1, 2, 3, 4, 5];

// Calculate the sum using an anonymous function with reduce
const sum = numbersArray.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // The initial value of the accumulator is set to 0

// Output the result
console.log(sum);
