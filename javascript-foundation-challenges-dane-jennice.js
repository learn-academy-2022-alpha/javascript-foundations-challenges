// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// // --> [9, 27, 45, 12, 30]

// Pseudo code
// create a function named mult3 that takes an array
// initialize an empty array named result that will be our result
// create a loop that iterates through the array
// take each number and multiply it by three and add it to result
// return our new result

// const mult3 = (array) => {
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] * 3)
//     }
//     return result
// }

// console.log(mult3(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]

// Pseudo code
// create a function named oddNumbers that takes an array
// store a new array of numbers
// create a loop that iterates over the array
// check if number is odd and add it to result if so
// then we return our result

// const oddNumbers = (array) => {
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         const num = array[i]
//         if (num % 2 !== 0) {
//             result.push(num)
//         }
//     }
//     return result
// }

// console.log(oddNumbers(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"

// Pseudo code
// create a function named message that takes an array
// create an empty string for our result
// create a loop that iterates that through the array
// in that loop we will check if the piece of data is of type string
// if so add to our result of string
// return that result

const message = (array) => {
    let result = ""
    for (let i = 0; i < array.length; i++) {
        const data = array[i]
        if (typeof data === "string") {
            result += data
        }
    }
    return result
}

console.log(message(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// // --> 10

// var addThese2 = []
// // --> 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// // --> 1
// STRETCH Challenges

// Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10

// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

// var addUp3 = 600
// // --> 180300