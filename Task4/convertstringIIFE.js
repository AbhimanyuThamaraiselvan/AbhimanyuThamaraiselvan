var stringArray = ["apple", "banana", "cherry"];

(function() {
  for (var i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
  }
})();

console.log(stringArray);
