//computer property names in object literals

'use strict';

var _person;

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var prefix = 'my';
var person = (_person = {}, _defineProperty(_person, prefix + 'Name', 'Joe'), _defineProperty(_person, prefix + 'Age', 21), _person);

console.log(person.myName);
