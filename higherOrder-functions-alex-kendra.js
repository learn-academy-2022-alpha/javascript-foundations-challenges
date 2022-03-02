
// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]

const arrayMult = (array) => {
    return array.map(a => (a * 10))
}
console.log(arrayMult(arr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // // --> [7, 3, 5, 13]

const arrayOdd = (array) => {
    return array.filter(a => (a % 2 === 1))
}
console.log(arrayOdd(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

const stringNew = (array) => {
    let a = array.filter(a => (typeof a === 'string'))
    return a.join("")
}
console.log(stringNew(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]

const newArr = (array) => {
    return array.filter(a => (a !== false && a !== " " && a !== null && a !== 0))
}
console.log(newArr(filterArrayValues))


// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
 
const noVow = (array) => {
    let arr = array.split("")
    let arr2 = arr.filter(a => (a !== "a" && a !== "e" && a !== "i" && a !== "o" && a !== "u"))
    return arr2.join("")
}
console.log(noVow(str))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]

const dupArray = (array1, array2) => {
    let array3 = array1.concat(array2)
    return array3.filter((a, b) => (array3.indexOf(a) === b)) 
}
console.log(dupArray(arr1, arr2));


// completed