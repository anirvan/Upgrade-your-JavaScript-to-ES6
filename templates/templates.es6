// var multiline = `this
// is
// a
// multiline string`;
//
// var multiline = `this
// is
// a
// multiline string
//   with    tabbing`;
//
// console.log(multiline);

//however be careful ("this is a multiline string with tabbing".length = 39) but
// console.log(multiline.length);

var name = 'Joe';
var msg = `Hello ${name}`;

console.log(msg);

var value = 12;

var newmsg = `Hello ${name}. You are worth ${value * 2}`;
console.log(newmsg);
