var person = {
	name: 'Joe',
	age: 21,
	married: true,
	hobbies: ['football', 'tennis', 'cooking']
};

var {name, age, hobbies: [first, second]} = person;
console.log(first);

// var person = {
//   name: 'Joe',
//   age: 21,
//   married: true
// };
//
// // A bit cumbersome:
// // var myName = person.name;
// // var myAge = person.age;
// //
// // console.log(myName + ' is ' + myAge);
//
// var { name: myName, age: myAge } = person;
// console.log(myName + ' is ' + myAge);
//
// //or
// var {name, age} = person;
// console.log(name + ' is ' + age);
//
// // works with arrays as well
//
// var numbers = [1, 2, 3];
// var [first, second] = numbers;
// console.log(first + ', ' + second);
//
// //and you can mix them too
//
// var person = {
//   name: 'Joe',
//   age: 21,
//   favourite: [1, 2, 3]
// };
// var { name, age, favourite: [first] } = person;
// console.log(name + ' is ' + age + ' and likes ' + first);
