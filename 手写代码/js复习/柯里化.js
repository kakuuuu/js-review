function add() {
    const _args = [...arguments];

    function fn() {
        _args.push(...arguments);
        return fn;
    }
    fn.toString = function() {
        return _args.reduce((sum, cur) => sum + cur);
    }
    return fn;
}
let x = add(1)(2)(3)(4)();
console.log(x);