// no argument
var hello = () => 'hello world';
console.log(hello());

// single argument
var greet = name => 'Hello ' + name;
console.log(greet('Tamas'));

// multiple arguments
var multiply = (n1, n2) => n1 * n2;
console.log(multiply(2, 5));

// multiple arguments v2
var multiply = (n1, n2) => {
  return n1 * n2;
};
console.log(multiply(3, 4));

// return object literal
var person = (name, age) => ({name: name, age: age});
console.log(person('Joe', 21));
