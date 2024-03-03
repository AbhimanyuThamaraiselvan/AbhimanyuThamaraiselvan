var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function(arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  var primeArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeArr.push(arr[i]);
    }
  }

  return primeArr;
})(numbersArray);

console.log(primeNumbers);
