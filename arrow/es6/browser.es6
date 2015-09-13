var btn = document.getElementById('greet');

var person = {
  name: 'Joe',
  age: 21,

  greet: function() {
    btn.addEventListener('click', () => this.display('Well hello there ' + this.name));
  },

  display: function(message) {
    console.log(message + '. You are ' + this.age + ' years old.');
  }
};

person.greet();


var test = (name, age) => console.log(arguments);
test('Joe', 21);
