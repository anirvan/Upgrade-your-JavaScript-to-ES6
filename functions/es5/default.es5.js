// default parameters in ES5

function greet(name, lang) {
  lang = lang || 'en'
  name = name || 'Unknown';

  var msg = null;
  if (lang === 'en') {
    var msg = 'Hello ';
  } else if (lang === 'it') {
    msg = 'Ciao ';
  } else {
    msg = 'Hello ';
  }

  return msg + name;
}

console.log(greet());
