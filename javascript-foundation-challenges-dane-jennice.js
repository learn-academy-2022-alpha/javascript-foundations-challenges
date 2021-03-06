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
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"

// Pseudo code
// create a function named message that takes an array
// create an empty string for our result
// create a loop that iterates that through the array
// in that loop we will check if the piece of data is of type string
// if so add to our result of string
// return that result

// const message = (array) => {
//     let result = ""
//     for (let i = 0; i < array.length; i++) {
//         const data = array[i]
//         if (typeof data === "string") {
//             result += data
//         }
//     }
//     return result
// }
//
// console.log(message(comboArr))

// // Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// var addThese2 = []
// // // --> 0
// // --> 10
//psuedo code:

// create a function addNums that will take an array
// create a variable for result as the total sum of the numbers
// create a loop in the function to iterate through the arrays
// add the current number to the result
// return the result
//
// const addNums = array => {
//   let totalSum = 0
//   for (let i=0; i < array.length; i++){
//     totalSum += array[i]
//   }
//   return totalSum
// }
//
// console.log(addNums(addThese2))

// Create a function that takes in an array of numbers and returns the index of the largest number.
//  var indexHighestNumber = [1, 4, 2, 3]
// // // --> 1

// const highestIndex = array => {
//   let highestNumber = array[0]
//   let index = 0
//   for (let i=0; i < array.length; i++){
//     if (highestNumber < array[i]){
//       highestNumber = array[i]
//       index = i
//     }
//   }
//   return index
// }

// console.log(highestIndex(indexHighestNumber))

// STRETCH Challenges
// Create a function that takes in two arrays and returns one array with no duplicate values.

//pseudo code:
//Create a function named combiner
//Create an empty array named result
//Create another array called combinedArray
//combiner takes two arrays and combines them into combinedArray
//Itterates through array for duplicates
//If duplicate, skip
//If not, add to result
//return result

// const combiner = (arrayOne, arrayTwo) => {
//    let combinedArray = arrayOne.concat(arrayTwo)
//    let result = []
//    for (let i = 0; i < combinedArray.length; i++){
//      if (!result.includes(combinedArray[i])){
//        result.push(combinedArray[i])
//       }
//   }
//    return result
// }

//  var arr1 = [3, 7, 10, 5, 4, 3, 3]
//  var arr2 = [7, 8, 2, 3, 1, 5, 4]

//  console.log(combiner(arr1,arr2))


// // --> [3, 7, 10, 5, 4, 8, 2, 1]

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]
// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]

// Pseudo code:
// create a funciton named buildArray
// create an empty array named result
// buildArray will take two numbers (length, value)
// iterate over loop for length
// push value into result
// return result

// const buildArray = (length, value) => {
//   let result = []
//   for (let i = 0; i < length; i++) {
//     result.push(value)
//   }
//   return result
// }

// console.log(buildArray(arrayLength, arrayValue))


// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10

// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

// var addUp3 = 600
// // --> 180300


// Pseudo code:
// create a function named addNums
// addNums will take a parameter of a number named num
// create an empty array named arr
// we can make a loop starting at 1 and go to num, pushing each number to arr
// create a variable to get our sum named sum
// we can then add each value from arr to sum
// return sum

// const addNums = num => {
//   let arr = []
//   for (let i = 1; i <= num; i++) {
//     arr.push(i)
//   }

//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }

//   return sum
// }

// console.log(addNums(addUp1))
// console.log(addNums(addUp2))
// console.log(addNums(addUp3))


// EPIC Challenges

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.

let randomNum = Math.floor(Math.random() * 100) + 1
let triesLeft = 7

const highLow = num => {
  if (num === randomNum) {
    return "Winner"
  }
  else if (num < randomNum) {
    return 'Too low, try again...'
  }
  else {
    return 'Too high, try again...'
  }
}

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault()
  const guess = parseInt(e.target.guess.value)

  if (isNaN(guess)) {
    return document.getElementById("notification").innerHTML = "Please choose a number"
  }

  if (triesLeft > 0) {
    const checkGuess = highLow(guess)
    if (checkGuess === "Winner") {
      alert(`The number was ${randomNum}. You Win!!!`)
      return location.reload()
    }
    else {
      document.getElementById("notification").innerHTML = checkGuess
      triesLeft--
    }
  }

  if (triesLeft === 0) {
    alert(`You lost, the correct number was ${randomNum}.`)
    location.reload()
  }

  document.getElementById("num-tries").innerHTML = `${triesLeft} tries left`
})