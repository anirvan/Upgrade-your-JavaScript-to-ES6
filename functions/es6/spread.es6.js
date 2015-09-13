"use strict";

var numbers = [5, 10, 3, 15];
console.log(Math.max.apply(Math, numbers));

console.log(Math.max.apply(Math, numbers.concat([22])));
