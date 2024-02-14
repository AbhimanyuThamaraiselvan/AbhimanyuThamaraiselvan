//Anonymous function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using an anonymous function to filter odd numbers
let oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});

// Printing the odd numbers
console.log("Odd numbers:", oddNumbers);


//IIFE
(function() {
   var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
   console.log("Odd numbers:");
 
   for (var i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 !== 0) {
       console.log(numbers[i]);
     }
   }
 })();