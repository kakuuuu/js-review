// 防抖
const debounce = (fn, delay) => {
    let time = null;
    return function() {
        clearTimeout(time);
        time = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

// 节流
const throttle = (fn, time) => {
    let flag = true;
    return function() {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, time);
    }
}