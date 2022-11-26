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

const without = function (arr1, arr2) {
    let arr1Copy = arr1;
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1Copy.length; j++) {
            if (arr2[i] === arr1Copy[j]) {
                arr1Copy.splice(j, 1)
                j--;
            }
        }
    }

    return arr1Copy;
}

console.log(without([1, 2, 3], [2, 3]));