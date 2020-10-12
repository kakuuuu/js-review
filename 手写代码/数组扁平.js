const arr = [1, [2, [3, [4, 5]]], 6];
//flat(Infinity)
console.log(arr.flat(Infinity));
// 
console.log(JSON.stringify(arr).replace(/\[|\]/g, '').split(','));
// 
const fn = arr => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(fn(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(fn(arr));