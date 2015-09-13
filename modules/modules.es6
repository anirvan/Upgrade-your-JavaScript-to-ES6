export function greet(name) {
  return 'Hello ' + name;
}

export var age = 21;

//this overwrites anotherModule
export var colour = 'black';

export * from './anotherModule.es6.js';
