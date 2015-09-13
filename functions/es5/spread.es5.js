//
// var n1 = 5;
// var n2 = 10;
//
// console.log(Math.max(n1, n2));

//
var numbers = [5, 10, 3, 15];
// console.log(Math.max(numbers)); //returns NaN
console.log(Math.max.apply(Math, numbers));
