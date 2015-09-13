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

'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Car = (function () {
  function Car(colour) {
    _classCallCheck(this, Car);

    this.colour = colour;
  }

  _createClass(Car, [{
    key: 'getColour',
    value: function getColour() {
      console.log('The car is ' + this.colour);
    }
  }, {
    key: 'engine',
    value: function engine() {
      console.log('This car has an engine.');
    }
  }, {
    key: 'wheel',
    value: function wheel() {
      console.log('Ideally four of them.');
    }
  }]);

  return Car;
})();

//
// var myCar = new Car('red');
// myCar.engine();
// myCar.getColour();

var Truck = (function (_Car) {
  function Truck() {
    _classCallCheck(this, Truck);

    _get(Object.getPrototypeOf(Truck.prototype), 'constructor', this).call(this, 'black');
  }

  _inherits(Truck, _Car);

  _createClass(Truck, [{
    key: 'printColour',
    value: function printColour() {
      return _get(Object.getPrototypeOf(Truck.prototype), 'getColour', this).call(this);
    }
  }]);

  return Truck;
})(Car);

// var myCar = new Car('red');
// myCar.engine();
// myCar.getColour();

var truck = new Truck();
truck.printColour();
