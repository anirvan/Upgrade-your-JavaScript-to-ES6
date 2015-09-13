//computer property names in object literals

var prefix = 'my';
var person = {
  [prefix + 'Name']: 'Joe',
  [prefix + 'Age']: 21
};

console.log(person.myName);
