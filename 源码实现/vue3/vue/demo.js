// shallowReactive
// shallowReadonly
// reactive,ref

function shallowRef(val) {
  return shallowReactive({ value: val })
}


function shallowReactive(obj) {


  return new Proxy(obj, {
    get(obj, key) {
      return obj[key];
    },
    set(obj, key, val) {
      obj[key] = val;
      console.log('更新ui');
      return true;
    }
  })
}

function reactive(obj) {
  if (typeof obj === 'object') {
    if (obj instanceof Array) {
      obj.forEach((item, index) => {
        if (typeof item === 'object') {
          obj[index] = reactive(item);
        }
      })
    } else {
      for (let key in obj) {
        let item = obj[key];
        if (typeof item === 'object') {
          obj[key] = reactive(item);
        }
      }
    }
    return new Proxy(obj, {
      get(obj, key) {
        return obj[key];
      },
      set(obj, key, val) {
        obj[key] = val;
        console.log('更新ui');
        return true;
      }
    })
  } else {
    console.warn(`${obj} is not object`)
  }
}

let obj = {
  a: 'a',
  gf: {
    b: 'b',
    f: {
      c: 'c'
    }
  }
}

// let state=shallowReactive(obj);
// let state = shallowRef(123);

let state=reactive(obj);
console.log(state);
state.a=1;
state.gf.b=2;
state.gf.f.c=3;


