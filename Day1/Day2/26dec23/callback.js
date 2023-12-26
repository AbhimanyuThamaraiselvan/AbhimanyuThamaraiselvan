function squarenumbers(number){
    return number.map(number=> number **2);
}

function calculateaverage(numbers, callback){
let squares =callback(number);
return (square.reduce((p,c)=>p+c)/number.length);
}
let number =[1,2,3,4,5];
let result = calculateaverage(number, squarenumbers);
console.log(result);