const filterHard = (arr, typeFilter, ...cbArr) => {
    if (!(cbArr.length > 0 && (typeFilter === 'and' || typeFilter === 'or'))) return false;
​
    const res = [];
​
    for (let item of arr) {
        let isValid = true;
​
        for (let cb of cbArr) {
            if (typeFilter === 'and') {
                if (!cb(item)) {
                    isValid = false;
                    break;
                }
            }
            if (typeFilter === 'or') {
                if (!cb(item)) {
                    isValid = false;
                } else {
                    isValid = true;
                    break;
                }
            }
        }
        if (isValid)
            res.push(item);
    }
​
    return res;
};
​
const map = (arr, cb) => {
    const res = [];
    for (const item of arr) res.push(cb(item));
    return res;
};
​
const find = (arr, cb) => {
    for (const item of arr)
        if (cb(item))
            return item;
};
​
const filter = (arr, cb) => {
    const res = [];
    for (const item of arr) {
        if (cb(item))
            res.push(item);
    }
​
    return res;
}
​
const reduce = (arr, cb, acc) => {
    let isAcc = true;
    if (acc === undefined) {
        acc = arr[0];
        isAcc = false;
    }
​
    for (let item of (isAcc ? arr : arr.slice(1)))
        acc = cb(item, acc);
​
    return acc;
};
​
const objsHuman = [
    { name: 'Bill', age: 35, gold: 40 },
    { name: 'Jon', age: 18, gold: 110 },
    { name: 'Tony', age: 12, gold: 0 },
    { name: 'Bob', age: 41, gold: 10 },
    { name: 'Mary', age: 34, gold: 100 }
];
​
// console.log(map([5,7,9,8,1,3], num => num * 2));
// console.log(map(['test', 'dsjucd', 'hjdsh', 'oiusdhoi'], str => str.length));
​
// console.log(find(objsHuman, human => human.age === 12));
​
// console.log(filter(objsHuman, human => human.age >= 18));
​
​
// console.log(reduce([5, 7, 9, 8, 1, 3], (item, acc) => acc + item));
​
// console.log(reduce(objsHuman, (item, acc) => {
//     acc.push(item.name);
//     return acc;
// }, []));
​
