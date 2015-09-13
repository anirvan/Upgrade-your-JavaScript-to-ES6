// create variables

// let msg = 'hello world';
// console.log(msg);

// let keeps its block (if, for, function)

// if (true) {
//   let msg = 'hello';
//   console.log(msg);
// }
// console.log(msg); //msg doesn't exist

// block for 'for' loops
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log('value of i is --> ' + i);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log('value of i is --> ' + i); //you can't access i

// let doesn't hoist
// if (true) {
//   console.log(msg);
//   let msg = 'hello';
// }

// let won't redefinition variables, only in blocks
'use strict';

var message = 'hello';
// let message = 'world';
if (true) {
  var _message = 'world';
  console.log(_message);
}
console.log(message);

//contants and lets work the same
// const MSG = 'hello';

//except:
// const MSG = 'hello';
// MSG = 'world'; //throws an error
