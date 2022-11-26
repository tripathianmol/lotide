const eqArrays = function (arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};

const assertArraysEqual = function (arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log(`🟢🟢🟢 Assertion Passed`);
    } else {
        console.log(`🔴🔴🔴 Assertion Failed`);
    }
}

const middle = function (array) {
    let middle = [];
    
    if (array.length == 1 || array.length == 2) {
        return middle;
    }

    if (array.length % 2 == 0) {
        middle = array.slice((array.length / 2) - 1, (array.length / 2) + 1);
    }

    if (array.length % 2 == 1) {
        middle = array.slice(Math.floor(array.length / 2), Math.floor(array.length / 2) + 1);
    }

    return middle;
};

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));