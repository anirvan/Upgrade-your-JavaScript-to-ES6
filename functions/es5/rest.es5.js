// rest parameters do not exist in ES5

function sum(numbers) {
  var result = numbers;

  for (var i = 1, length = arguments.length; i < length; i++) {
    result += arguments[i];
  }

  return result;
}

console.log(sum(1,2));
