//Challenge #1 Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
// --> [9, 27, 45, 12, 30]

const mult3 = (arr) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 3)
    }
    return newArr
}

console.log(mult3(testArr1))

//Challenge #2 Write a function that takes in an array of numbers and returns a new array with only odd numbers.

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// --> [-7, 3, 5, 13]

const oddNumbers = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(oddNumbers(testArr2))

//Challenge #3 Write a function that takes in an array of numbers and letters and returns a string with only the letters.
// HINT: use the typeof method
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

const onlyLetters = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            newArr.push(arr[i])
        }
    }
    return newArr.join('')
}
console.log(onlyLetters(comboArr))

//Challenge #4 Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4]
// --> 10
var addThese2 = []
// --> 0

// const sumOf = (arr) => arr.reduce((a,b) => a + b, 0)

const sumOf = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum

}
console.log(sumOf(addThese1))
console.log(sumOf(addThese2))

//Challenge #5 Create a function that takes in an array of numbers and returns the index of the largest number.

var indexHighestNumber = [1, 4, 2, 3]
// --> 1

const findHighest = (arr) => {
    let max = Math.max(...arr)
    return arr.indexOf(max)
}
console.log(findHighest(indexHighestNumber))


//STRETCH Challenges
//Challenge #1
//Create a function that takes in two arrays and returns one array with no duplicate values.
//Psuedo Code



var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]

const arr3 = (array1 , array2) => {
    let combinedArr = []
    for (let i = 0; i < array1.length; i++) {
        if(combinedArr[i] % array2[i] !== 0 || combinedArr[i] % array1[i] !== 0) {
            combinedArr.push(array2[i] || array1[i])

        }

    }
    return combinedArr
}
console.log(arr3(arr1, arr2))

//
// for(let j = 0; j < superman.length; j++){
//     if(superman[i] !== batman[j]) {
//         combinedArr.push(array[i])
//     }
//
// }