// apply
Function.prototype.apply = function(context = window, args) {
        if (typeof this !== 'function') {
            throw new TypeError('Type Error');
        }
        const fn = Symbol('fn');
        context[fn] = this;

        const res = context[fn](...args);
        delete context[fn];
        return res;
    }
    // call
Function.prototype.call = function(context = window, ...args) {
        if (typeof this !== 'function') {
            throw new TypeError('Type Error');
        }
        const fn = Symbol('fn');
        context[fn] = this;

        const res = this[fn](...args);
        delete this.fn;
        return res;
    }
    // bind
Function.prototype.bind = function(context, ...args) {
    if (typeof this !== 'function') {
        throw new Error("Type Error");
    }
    // 保存this的值
    var self = this;

    return function F() {
        // 考虑new的情况
        if (this instanceof F) {
            return new self(...args, ...arguments)
        }
        return self.apply(context, [...args, ...arguments])
    }
}