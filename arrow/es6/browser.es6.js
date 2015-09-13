'use strict';

var _arguments = arguments;
var btn = document.getElementById('greet');

var person = {
  name: 'Joe',
  age: 21,

  greet: function greet() {
    var _this = this;

    btn.addEventListener('click', function () {
      return _this.display('Well hello there ' + _this.name);
    });
  },

  display: function display(message) {
    console.log(message + '. You are ' + this.age + ' years old.');
  }
};

person.greet();

var test = function test(name, age) {
  return console.log(_arguments);
};
test('Joe', 21);
