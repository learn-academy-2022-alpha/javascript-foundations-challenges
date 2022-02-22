// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// // --> [9, 27, 45, 12, 30]
const arrayNumbers = (array) => {
    let newArr = []
    for (let i = 0; i < array.length; i++ ) {
        newArr.push(array[i] * 3)
    }
    return newArr
}
console.log(arrayNumbers(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// --> [-7, 3, 5, 13]
const arrayNumbers2 = (array) => {
    let newArr = []
    for (let i = 0; i < array.length; i++ ) {
        if (array[i] % 2 !== 0) {
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log(arrayNumbers2(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"
const mixArray = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            newArray.push(array[i])
        }
    }
    return newArray.join("")
}
console.log(mixArray(comboArr));


// Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// // --> 10
// var addThese2 = []
// // --> 0
const addArray = (array) => {
    let newArray = 0
    for (let i = 0; i < array.length; i++) {
        newArray += array[i]
    }
    return newArray
}
console.log(addArray(addThese1));
console.log(addArray(addThese2));



// Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// --> 1
const highArray = (array) => {
    let highNum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > highNum) {
            highNum = array[i]
        }
    }
    return highNum
}
console.log(indexHighestNumber.indexOf(highArray(indexHighestNumber)));


// Create a function that takes in two arrays and returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
const twoArray = (array1, array2) => {
    for (let i = 0; i < array2.length; i++) {
        arr1.push(arr2[i])
    }
    // return array1.filter((a, b, c) => c.indexOf(a) === b)
    return [...new Set(array1)]
}
console.log(twoArray(arr1, arr2));


// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
var arrayLength = 6
var arrayValue = 0
// --> [0, 0, 0, 0, 0, 0]
var arrayLength2 = 4
var arrayValue2 = 11
// --> [11, 11, 11, 11]
const countArray = (var1, var2) => {
    let newArray = []
    for (let i = 0; i < var1; i++) {
        newArray.push(var2)
    }
    return newArray
}
console.log(countArray(arrayLength, arrayValue));
console.log(countArray(arrayLength2, arrayValue2));



// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
var addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// --> 10
var addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// --> 55
var addUp3 = 600
// --> 180300
const totalArray = (array) => {
    let total = 0
    for (let i = 1; i <= array; i++) {
        total += i
    }
    return total
}
console.log(totalArray(addUp1));
console.log(totalArray(addUp2));
console.log(totalArray(addUp3));