# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tripathianmol/lotide`

**Require it:**

`const _ = require('@tripathianmol/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Checks if two arrays are identical.
* `assertEquals(actual, expected)`: Checks if the two arguments are identical.
* `assertObjectsEqual(obj1, obj2)`: Logs whether two objects are identical.
* `countOnly(allItems, itemsToCount)`: This function takes in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.
* `eqArrays(arr1, arr2)`: Returns true if the two arrays are identical.
* `eqObjects(arr1, arr2)`: Returns true if the two objects are identical.
* `findKey(obj, cb)`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(obj, val)`: Search for a key on an object where its value matches a given value.
* `flatten(array)`: Flattens a nested array up to one level deep.
* `head(arr)`: Returns the first element of the array. If array is empty, then it returns undefined.
* `letterPostions(sentence)`: return all the indices (zero-based positions) in the string where each character is found.
* `map(arr, cb)`: Runs the callback on each element of the array.
* `middle(arr)`: Returns the middle of the array.
* `tail(arr)`: Returns the array without the head.
* `takeUntil(arr, cb)`: Returns a subset of the array until where the callback returns true.
* `without(arr1, arr2)`: Return a subset of a given array, removing unwanted elements.
* `countLetters(sentence)`: Returns an object cotaining the count of the number of letters in the sentence.