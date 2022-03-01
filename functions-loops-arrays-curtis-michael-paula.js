// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
 // --> [9, 27, 45, 12, 30]
 //create a function mult3
 //take in an array of numbers
 //iterate through the array
 //modify each item in the array
 //store new array of numbers
// //return an array with all numbers multiplied by 3
//
// const mult3 = (array) => {
//   let newArray = []
//   for(let i = 0; i<array.length; i++){
//     newArray.push(array[i] * 3)
//   }
//   return newArray
// }
//
// console.log(mult3(testArr1));

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
 var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]
// create a function called odds
//take in array of numbers
//iterate through the array
//create a conditional to check for odd numbers
//return with only ODD numbers
//
// const odds = (array) => {
//   let oddNumber = []
//   for(let i = 0; i<array.length; i++){
//     if(array[i] % 2 !== 0){
//       oddNumber.push(array[i])
//     }
//   }
//   return oddNumber
// }
// console.log(odds(testArr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
 var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"
//create a function named onlyLetters
//take in an array with mixed data types
//iterate through for strings
//use a conditional with the typeof method
//return only with strings

// const onlyLetters = (array) => {
//   let strings = []
//   for(let i = 0; i<array.length; i++){
//     if(typeof array[i] === "string"){
//       strings.push(array[i])
//     }
//   }
//   return strings.join("")
// }
// console.log(onlyLetters(comboArr))
//


// Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4]
// // --> 10
//create a function called sum
//take in numbers
//interate through the items and add all together
//return a single number

const sum = (array) => {
  let addTogether = [0]
  for(let i = 0; i<array.length; i++){
    addTogether += addThese1[i]
  }
  return addTogether
}
console.log(sum(addThese1))









// var addThese2 = []
// // --> 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// // --> 1
// STRETCH Challenges
//
// Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]
//
// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10
//
// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55
//
// var addUp3 = 600
// // --> 180300
