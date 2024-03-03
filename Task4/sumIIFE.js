var numbersArray = [1, 2, 3, 4, 5];

var sum = (function() {
  var total = 0;

  for (var i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i];
  }

  return total;
})();

console.log(sum);
