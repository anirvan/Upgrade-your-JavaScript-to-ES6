// simple iterator (for - of)

// for (var item of [1, 2, 3]) {
//   console.log(item);
// };

//generator
// use babel-node app.es6 not babel

// function *items() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
//
// var iterator = items();

// for (var item of iterator) {
//   console.log(item);
// }

// or
// console.log(iterator.next()); //value: 1; done: false
// console.log(iterator.next()); //value: 2; done: false
// console.log(iterator.next()); //value: 3; done: true
// console.log(iterator.next()); //value: undefined; done: true


function *items() {
  var first = yield 1;
  var second = yield first + 2;
  yield second + 3;
}

var iterator = items();
// or pass in values to the iterators
console.log(iterator.next()); //value:1; done: false
console.log(iterator.next(3)); // ??
console.log(iterator.next(3)); // ??
console.log(iterator.next()); // ??
