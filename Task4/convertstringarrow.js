
const stringArray = ["hello world", "javascript is awesome", "title case example"];


const titleCaseArray = stringArray.map(str => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
});


console.log(titleCaseArray);
