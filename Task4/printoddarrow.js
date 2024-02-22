(() => {
    let numbers = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  
    console.log("Odd numbers:");
  
    numbers.forEach(number => {
      if (number % 2 !== 0) {
        console.log(number);
      }
    });
  })();