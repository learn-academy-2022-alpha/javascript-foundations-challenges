// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]

const mult3 = (array) => {
 let newArray = []
 for(let i = 0; i<array.length; i++){
 newArray.push(array[i]*3)
 }
 return newArray
}
console.log(mult3(testArr1))

//Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const onlyOdd = (array) => {
  let oddArray = []
  for(let i = 0; i<array.length; i++){
    if(array[i] % 2 !== 0){
      oddArray.push(array[i])
    }
  }
  return oddArray
}
console.log(onlyOdd(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// --> "nicework"

const onlyLetters = (array) => {
  let stringArray = []
  for(let i = 0; i<array.length; i++){
    if(typeof array[i] === "string"){
      stringArray.push(array[i])
    }
  }
  let stringArray2 = stringArray.join("")
  return stringArray2
}
console.log(onlyLetters(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4, 5]
// --> 10

var addThese2 = []
// --> 0

const sumOfArray = (array) => {
  let runningIndex = 0
  for(let i = 0; i<array.length; i++){
    runningIndex = array[i] + array[i++] + array[array.length-1]
  }
  return runningIndex
}
console.log(sumOfArray(addThese1))

// Create a function that takes in an array of numbers and returns the index of the largest number.
var indexHighestNumber = [1, 4, 2, 3]
// --> 1

const highestNumberInArray = (array) => {
  let highestNumber = 0
  for(let i = 0; i<array.length; i++){
    if(array[i] > array[i++]){
      highestNumber = array.indexOf(array[i])
    }
    else if(array[i]<array[i++]){
      highestNumber = array.indexOf(array[i++])
    }
  }
  return highestNumber
}
console.log(highestNumberInArray(indexHighestNumber))
