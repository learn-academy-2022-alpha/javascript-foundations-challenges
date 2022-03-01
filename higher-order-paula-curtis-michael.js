// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]

var tex1 = arr1.map((value) => {
    return value * 10
})
console.log(tex1)

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]

const Odd = (array) => {
    return array.filter(value => value % 2 !== 0)
}
console.log(Odd(arr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

const lett = (array) => {
    let dataType = array.filter(value => {
        return typeof (value) === "string"
    })
    return dataType.join("")
}
console.log(lett(comboArr))


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
const val1 = (array) => {
    let trueValue = array.filter(value => {
        return typeof (value) === "String"
        // this is not working :(
    })
    return trueValue
}
console.log(val1(filterArrayValues))

// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
