// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// const { string } = require("yargs")

//pseudo code
//create a function
//map through the array
//multiplied by 10 all the values 
//output // --> [30, 90, 150, 40, 100]

//  var arr1 = [3, 9, 15, 4, 10]
//  const multiplied = arr1.map(value => {
//      return value * 10
//  })
//  console.log(multiplied);




// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

//pseudo code 
//create a function onlyOdd
//filter through to get only odd numbers
// output --> [7, 3, 5, 13]

//  var arr2 = [2, 7, 3, 5, 8, 10, 13]
//  const onlyOdd = arr2.filter(value => {
//      return value % 2 !==0
//  })
// console.log(onlyOdd);


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method


var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
//  comboArr.forEach((value) => {
//      console.log(typeof value === "string")

//  })

// 
// const strFinder = (array) => {
//     let filterArray = array.filter(value => {
//         return typeof value === "string"
//     }) 
//     return filterArray.join("")
// }

// console.log(strFinder(comboArr))
// // --> "nicework"




// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// --> [58, "abcd", true]

// create a function filteredArray 
// use higher order function .filter through array without any false, null, 0, or blank values
// return the array 



const filteredArray = (array) => {
    let filtered = array.filter(value => {
        if (value !== false && value !== null && value !==0 && value !== " "){
            return value 
        }
    })
    return filtered
    }
// console.log(filteredArray(filterArrayValues))


// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"

const noVowels = (strings) => {
    let arr = strings.split("")
    var string = arr.filter(value => (
      value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
    ))
      return string.join("")
  }
  console.log(noVowels(str))
// --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]




    

