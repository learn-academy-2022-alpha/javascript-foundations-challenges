// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

//pseudo code
//create a function
//map through the array
//multiplied by 10 all the values 
//output // --> [30, 90, 150, 40, 100]

 var arr1 = [3, 9, 15, 4, 10]
 const multiplied = arr1.map(value => {
     return value * 10
 })
 console.log(multiplied);




// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

//pseudo code 
//create a function onlyOdd
//filter through to get only odd numbers
// output --> [7, 3, 5, 13]

 var arr2 = [2, 7, 3, 5, 8, 10, 13]
 const onlyOdd = arr2.filter(value => {
     return value % 2 !==0
 })
console.log(onlyOdd);


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
 var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]



// // --> "nicework"




// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]