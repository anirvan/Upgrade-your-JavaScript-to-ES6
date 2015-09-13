// function greet(name = 'Unknown', lang = 'en') {
//   var msg = null;
//   if (lang === 'en') {
//     var msg = 'Hello ';
//   } else if (lang === 'it') {
//     msg = 'Ciao ';
//   } else {
//     msg = 'Hello ';
//   }
//
//   return msg + name;
// }
//
// console.log(greet());


// better

var greet = (name='Unknown', lang='en') => {
  var msg = null;
  if (lang === 'en') {
    var msg = 'Hello ';
  } else if (lang === 'it') {
    msg = 'Ciao ';
  } else {
    msg = 'Hello ';
  }

  return msg + name;
};

console.log(greet('Tamas', 'it'));
