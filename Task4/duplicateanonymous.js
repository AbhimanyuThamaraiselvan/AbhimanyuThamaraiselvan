// Sample array with duplicates
const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7];

// Use filter with an anonymous function to remove duplicates
const uniqueArray = ((arr) => {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
})(arrayWithDuplicates);

// Output the result
console.log(uniqueArray);
