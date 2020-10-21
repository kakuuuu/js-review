import defineReactiveData from './reactive.js';
import { arrMethods } from './array.js';
import observeArr from './observeArr.js';

function Observer(data) {
  if (Array.isArray(data)) {
    data.__proto__ = arrMethods;
    observeArr(data);
  } else {
    this.walk(data);
  }
}

Observer.prototype.walk = function(data) {
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
      value = data[key];
    defineReactiveData(data, key, value);
  }
}


export default Observer;