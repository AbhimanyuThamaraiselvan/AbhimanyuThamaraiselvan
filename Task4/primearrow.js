// Sample array of numbers
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Arrow function to check if a number is prime
const isPrime = num => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Use filter with an arrow function to get prime numbers
const primeNumbersArray = numbersArray.filter(num => isPrime(num));

// Output the result
console.log(primeNumbersArray);
