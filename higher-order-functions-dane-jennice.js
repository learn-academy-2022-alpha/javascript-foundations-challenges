
// Higher Order Functions challenges:

// Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.
//

//Challenge 1
// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// Pseudo code:
// Create a function named mult10
// mult10 takes an array of numbers
// Iterrates the function through the array
// Gets the value and multiply by 10
// Return the result on a new array
 var arr1 = [3, 9, 15, 4, 10]
 const mult10 = array => {
  return array.map(value => value * 10)
 }

console.log(mult10(arr1))

// --> [30, 90, 150, 40, 100]

//Challenge 2
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]

//pseudo code:
//Create a function named oddsOnly
//oddsOnly takes an array of numbers
//Itterates the function through the array
//Gets the value and checks if it is an odd number
//If so, return to the higher order function which gives us a new array
//If not, don't include in the array
//Return the new array

const oddsOnly = array =>{
  return array.filter(value => value % 2 !== 0)
}

console.log(oddsOnly(arr2))

//Challenge 3
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method

//pseudo code:
//Create a function named message
//message takes an array of mixed data
//Create an empty string named result
//Itterates the function through the arrays
//Gets the value and checks if it is a string or not
//If so, add it to result
//If not, then ignore and move onto the next
//Return result


var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

const message = array => {
  let result = ""
  array.forEach(value => {
  if( typeof value === "string"){
    result += value
  }
  })
  return result
}

console.log(message(comboArr))

//Challenge 4
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.


var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]

//pseudo code:

//Create a function named filterGarbage
//filterGarbage takes an array
//Itterates through the data of the array

const filterGarbage = array => {
  return array.filter(value => {
  if (value && value !== " "){
    return value
  }
  })
}

//possible optional way using .trim()
// const filterGarbage = array => {
//   return array.filter(value => {
//   if (value){
//     if (typeof value === "string"){
//       if (value.trim().length === 0){
//         return false
//       }
//   }
//     return true
//   }
//   })
// }

console.log(filterGarbage(filterArrayValues))

// STRETCH Challenges
//
// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
