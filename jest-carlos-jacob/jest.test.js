// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

// write a function that conditional 
// Outputs "drink coffee" if you are tired and "keep working" if you are not tired

// describe("caffine", () => {
//     it("returns the string drink coffee if you are tired or keep working based in the input",()=>{
//     expect(caffine("tired")).toEqual("drink coffee")
//     expect(caffine("not tired")).toEqual("keep working")
// } )
// })

// const caffine = (string) => {
//     if(string == "tired"){
//         return "drink coffee"
//     } else {
//         return "keep working"
//     }
// }




// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

// describe("areYouStressed", () => {
//     it("returns relax if you are stressed and keep going if you are not stressed.",()=>{
//     expect(areYouStressed("stressed")).toEqual("relax")
//     expect(areYouStressed("not stressed")).toEqual("keep working")
// } )
// })

// const areYouStressed = (str) => {
//     if(str == "stressed"){
//         return "relax"
//     } else {
//         return "keep working"
//     }
// }


// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.

// make a function that defines a value
// rationalizes value in relation to $300
// outputs "in budget" if value is less then $300



// describe("areYouInBudget", () => {
//     it("returns in budget if a price is lower than $300",() => { 
//     expect(areYouInBudget(300)).toEqual("put it back")
//     expect(areYouInBudget(299)).toEqual("in budget")
// } )
// })

// const areYouInBudget = (price) => {
//     if(price < 300){
//         return "in budget"
//     } else {
//         return "put it back"
//     }
// }



// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.


// create function that compares two numbers
//outputs the smaller




// describe("smallerOne", () => {
//     it("returns the smaller of the two numbers",()=>{
//     expect(smallerOne(1)).toBeGreaterThan(2)
   
// } )
// })
// let num1 = 3
// let num2 = 4
// const smallerOne = (num1,num2) => {
//     if(num1<num2){
//         return num1<num2
//     } else {
//         return "num2 is greater"
//     }
// }

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.



// describe("oddNumber", () => {
//         it("returns if a number is odd",() => { 
//         expect(oddNumber(true)).toEqual(expect.any(Boolean))
//     } )
//     })

// let numbers = 3
// const oddNumber = (number) => {
//     if(numbers % 2 === 0){
//         return "true"
//     } else {
//         return "false"
//     }
// }


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.

describe("oddNumber", () => {
        it("returns if a number is odd",() => { 
        expect(oddNumber(true)).toEqual(expect.any(Boolean))
    } )
    })

let numbers = 3
const oddNumber = (number) => {
    if(numbers % 2 === 0){
        return "true"
    } else {
        return "false"
    }
}

