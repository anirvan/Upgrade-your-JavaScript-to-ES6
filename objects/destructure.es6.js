'use strict';

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

var person = {
  name: 'Joe',
  age: 21,
  married: true
};

// A bit cumbersome:
// var myName = person.name;
// var myAge = person.age;
//
// console.log(myName + ' is ' + myAge);

var myName = person.name;
var myAge = person.age;

console.log(myName + ' is ' + myAge);

//or
var name = person.name;
var age = person.age;

console.log(name + ' is ' + age);

// works with arrays as well

var numbers = [1, 2, 3];
var first = numbers[0];
var second = numbers[1];

console.log(first + ', ' + second);

//and you can mix them too

var person = {
  name: 'Joe',
  age: 21,
  favourite: [1, 2, 3]
};
var name = person.name;
var age = person.age;

var _person$favourite = _slicedToArray(person.favourite, 1);

var first = _person$favourite[0];

console.log(name + ' is ' + age + ' and likes ' + first);
