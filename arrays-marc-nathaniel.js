// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// // --> [9, 27, 45, 12, 30]
// const arrayNumbers = (array) => {
//     let newArr = []
//     for (let i = 0; i < array.length; i++ ) {
//         newArr.push(array[i] * 3)
//     }
//     return newArr
// }
// console.log(arrayNumbers(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]
// const arrayNumbers2 = (array) => {
//     let newArr = []
//     for (let i = 0; i < array.length; i++ ) {
//         if (array[i] % 2 !== 0) {
//             newArr.push(array[i])
//         }
//     }
//     return newArr
// }
// console.log(arrayNumbers2(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"
// const mixArray = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'string') {
//             newArray.push(array[i])
//         }
//     }
//     return newArray.join("")
// }
// console.log(mixArray(comboArr));


// Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// // --> 10
// var addThese2 = []
// // --> 0
// const addArray = (array) => {
//     let newArray = 0
//     for (let i = 0; i < array.length; i++) {
//         newArray += array[i]
//     }
//     return newArray
// }
// console.log(addArray(addThese1));
// console.log(addArray(addThese2));



// Create a function that takes in an array of numbers and returns the index of the largest number.
var indexHighestNumber = [1, 4, 2, 3]
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

