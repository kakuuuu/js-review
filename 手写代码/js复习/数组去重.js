const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
//1
console.log([...new Set(arr)]);
//2
const unique1 = arr => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
                len--;
                j--;
            }
        }
    }
    return arr;
}
console.log(unique1(arr));
//3
const unique2 = arr => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
    }
    return res;
}
console.log(unique2(arr));