//rest is a special named parameter

function sum(...numbers) {
  var result = null;

  for (var i = 0, length = numbers.length; i < length; i++) {
    result += numbers[i];
  }

  return result;
}

console.log(sum(1));
