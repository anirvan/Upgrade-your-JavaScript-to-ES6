'use strict';

var btn = document.getElementById('greet');

var person = {
  name: 'Joe',
  age: 21,

  greet: function greet() {
    btn.addEventListener('click', (function () {
      console.log(this);
      return this.display('Well hello there ' + this.name);
    }).bind(this));
  },

  display: function display(message) {
    console.log(message + '. You are ' + this.age + ' years old.');
  }
};

person.greet();

// var test = function test(name, age) {
//   console.log(arguments);
//   return {name: name, age: age};
// };
// test('Joe', 21);
