// function greet(name = 'Unknown', lang = 'en') {
//   var msg = null;
//   if (lang === 'en') {
//     var msg = 'Hello ';
//   } else if (lang === 'it') {
//     msg = 'Ciao ';
//   } else {
//     msg = 'Hello ';
//   }
//
//   return msg + name;
// }
//
// console.log(greet());

// better

'use strict';

var greet = function greet() {
  var name = arguments[0] === undefined ? 'Unknown' : arguments[0];
  var lang = arguments[1] === undefined ? 'en' : arguments[1];

  var msg = null;
  if (lang === 'en') {
    var msg = 'Hello ';
  } else if (lang === 'it') {
    msg = 'Ciao ';
  } else {
    msg = 'Hello ';
  }

  return msg + name;
};

console.log(greet('Tamas', 'it'));
