function change_kth_char_to_uppercase(string, k) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      if ((i + 1) % k === 0 && k !== 0) {
        result += string[i].toUpperCase();
      } else {
        result += string[i];
      }
    }
    return result;
  }
  
  let input_string = "string";
  let k = 2;
  let output_string = change_kth_char_to_uppercase(input_string, k);
  console.log(output_string);