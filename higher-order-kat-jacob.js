// Challenge #1 Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// --> [30, 90, 150, 40, 100]

let multiplyByTen = (arr) => {
    let multiplyThis = arr.map(value => {
        return value * 10
    })
    return multiplyThis
}
console.log(multiplyByTen(arr1))


// Challenge #2 Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// --> [7, 3, 5, 13]

const onlyOdd = (array) => {
    return array.filter(value => value % 2 !== 0)
}

console.log(onlyOdd(arr2))


// Challenge #3 Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT:
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// --> "nicework"

let onlyLetters = (arr) => {
    let filterOut = arr.filter(value => {
        return typeof value ==="string"
    })
    return filterOut.join('')
}
console.log(onlyLetters(comboArr))


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
    var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// --> [58, "abcd", true]
let notIncluded = (arr) => {
    let newArr = []
    let filterOut = arr.filter(value => {
        if(value !== null && value !== " " && value !== 0 && value !== false)
        return newArr
    })
    return filterOut
}
console.log(notIncluded(filterArrayValues))


// STRETCH Challenges
//#1 Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
// --> "jvscrpt s wsm"

const noVowels = (str) => {
    let splitStr = str.split('')
    return splitStr.filter((value) => {
        if(value !== 'a' && value !=='e' && value !=='i'&& value !=='o'&& value !=='u')
            return value
    })
}
console.log(noVowels(str).join(''))


//#2 Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// Create a function that takes in two arrays and returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
//--> [3, 7, 10, 5, 4, 8, 2, 1]

const noDuplicates = (values1, values2) => {
    let newArray = []
    let combinedArray = values1.concat(values2)
    for(i = 0; i < combinedArray.length; i++) {
        if(newArray.indexOf(combinedArray[i]) === -1) {
            newArray.push(combinedArray[i])

        }
    }
    return newArray
}
console.log(noDuplicates(arr1, arr2))





