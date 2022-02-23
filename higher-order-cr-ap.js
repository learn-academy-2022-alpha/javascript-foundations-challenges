// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]

let multTen = arr1.map((value)=>{
    return value * 10
})
console.log(multTen)

// --> [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

var arr2 = [2, 7, 3, 5, 8, 10, 13]

let onlyOdds = arr2.filter(value =>{
    return value % 2 !== 0
})

console.log(onlyOdds)
 // --> [7, 3, 5, 13]

//  Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method

var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

let onlyLetters = comboArr .filter(value =>{
    return typeof value === "string"
})

console.log(onlyLetters.join(""))
// --> "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

// const filter1 = (Array) => {
//     let cream = Array.filter(value =>{
//         return typeof value === "string" && value === "number" 
//     }
//     })
//     return filter1.map(value)
// console.log(filter1(filterArrayValues))

const filter1 = (array) => {
    let noNumb = array.filter(value =>{
     
        return typeof value  === "string" || typeof value === "number" || value === true
    }) 
    return noNumb.map(value => value)
}
console.log(filter1(filterArrayValues))


// --> [58, "abcd", true]

// Create a function that takes in a string and returns a new string with all the vowels removed.

// var str = "javascript is awesome"


// --> "jvscrpt s wsm"

// Create a function that takes in two arrays and returns one array with no duplicate values.


// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]

// const combiner = (array1, array2) => {
//     let combinedArray = arrayOne.concat(array2)
//     let result = []
//     for (let i=0; i< combinedArray.length; i++){
//         if (!result.includes(combinedArray[i])){
//             result.push(combinedArray[i])
//         }
//     }
//     return result
// }
// console.log(combiner(arr1,arr2))
// // --> [3, 7, 10, 5, 4, 8, 2, 1]