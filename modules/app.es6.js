// import everything
// import * as myModule from './modules.es6.js';
// console.log(myModule.greet('Joe'));
// console.log(myModule.age);

// import only few variables/functions
// import {greet, age} from './modules.es6.js';
// console.log(age);
// console.log(greet('Joe'));

'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _modulesEs6Js = require('./modules.es6.js');

var myModule = _interopRequireWildcard(_modulesEs6Js);

console.log(myModule.colour);
