//no argument
// var hello = () => 'hello world';
// console.log(hello());

//single argument
// var greet = name => name;
// console.log(greet('Tamas'));

//multiple arguments
// var multiply = (n1, n2) => n1 * n2;
// console.log(multiply(2, 5));

//multiple arguments v2
// var multiply = (n1, n2) => {
//   return n1 * n2;
// };
// console.log(multiply(3, 4));

'use strict';

var person = function person(name, age) {
  return { name: name, age: age };
};
console.log(person('Joe', 21));
