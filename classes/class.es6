// class Car {
//   engine() {
//     console.log('This car has an engine');
//   }
//
//   wheel() {
//     console.log('Ideally four of them');
//   }
// }

// var myCar = new Car();
// myCar.engine();
// myCar.wheel();

class Car {
  constructor(colour) {
    this.colour = colour;
  }

  getColour() {
    console.log('The car is ' + this.colour);
  }

  engine() {
    console.log('This car has an engine.');
  }

  wheel() {
    console.log('Ideally four of them.');
  }
}
//
// var myCar = new Car('red');
// myCar.engine();
// myCar.getColour();

class Truck extends Car {
  constructor() {
    super('black');
  }

  printColour() {
    return super.getColour();
  }
}

// var myCar = new Car('red');
// myCar.engine();
// myCar.getColour();

var truck = new Truck();
truck.printColour();
