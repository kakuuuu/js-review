import { ARR_METHODS } from "./config.js";
import observeArr from './observeArr.js'
var orginArrMethods = Array.prototype,
  arrMethods = Object.create(orginArrMethods);

ARR_METHODS.map(function(m) {
  arrMethods[m] = function() {
    var args = Array.prototype.slice.call(arguments),
      rt = orginArrMethods[m].apply(this, args);
    var newArr;
    switch (m) {
      case 'push':
        // newArr = args;
        break;
      case 'unshift':
        newArr = args;
        break;
      case 'splice':
        newArr = args[2].splice(2);
        break;
      default:
        break;
    }
    newArr && observeArr(newArr);
    return rt;
  }
})

export {
  arrMethods
}