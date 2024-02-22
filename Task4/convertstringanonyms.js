(function() {
    const stringArray = ["apple", "banana", "cherry", "date"];
  
    const titleCapsArray = stringArray.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
  
    console.log(titleCapsArray);
  })();
  