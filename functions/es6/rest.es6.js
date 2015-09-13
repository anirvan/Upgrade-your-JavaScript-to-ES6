//rest is a special named parameter

"use strict";

function sum() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  var result = null;

  for (var i = 0, length = numbers.length; i < length; i++) {
    result += numbers[i];
  }

  return result;
}

console.log(sum(1));
