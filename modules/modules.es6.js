'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.greet = greet;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function greet(name) {
  return 'Hello ' + name;
}

var age = 21;

exports.age = age;
//this overwrites anotherModule
var colour = 'black';

exports.colour = colour;

var _anotherModuleEs6Js = require('./anotherModule.es6.js');

_defaults(exports, _interopRequireWildcard(_anotherModuleEs6Js));
