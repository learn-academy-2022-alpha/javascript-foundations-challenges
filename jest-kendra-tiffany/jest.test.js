// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
    //Write a Test:
        describe("areYouTired", () => {
            it("returns drink coffee if you are tired and if not, keep working", () => {
              expect(areYouTired("yes")).toEqual("drink coffee")
              expect(areYouTired("no")).toEqual("keep working")  
            })
        })
    // Run Test

    

// Write the function that will make the test pass.
    const areYouTired = (string) => {
        if(string === "yes") {
            return "drink coffee"
        } else if(string === "no") {
            return "keep working"
        }
    }
    



// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("areYouStressed", () => {
    it("returns relax if you are stressed and if not, keep going", () => {
      expect(areYouStressed("yes")).toEqual("relax")
      expect(areYouStressed("no")).toEqual("keep going")  
    })
})


// Write the function that will make the test pass.
const areYouStressed = (string) => {
    if(string === "yes") {
        return "relax"
    } else if(string === "no") {
        return "keep going"
    }
}



// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("canIAfford", () => {
    var price = 140
    var price2 = 350
    it("returns in budget if we can afford and if not, too expensive", () => {
      expect(canIAfford(price)).toEqual("in budget")
      expect(canIAfford(price2)).toEqual("too expensive")  
    })
})


// Write the function that will make the test pass.
const canIAfford = (price) => {
    if(price <= 299) {
        return "in budget"
    } else if(price >= 300) {
        return "too expensive"
    }
}


// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe("whichIsSmaller", () => {
    var number1 = 80
    var number2 = 40
    it("returns the smaller number", () => {
        expect(whichIsSmaller(number1 , number2)).toEqual(number2)
    })
})

// Write the function that will make the test pass.
const whichIsSmaller = (num1, num2) => {
    if(num1 < num2) {
        return num1
    } else if(num2 < num1) {
        return num2
    }
}



// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
var isItOdd = 7
describe ("oddOrNot", () => {
    it("returns if the number is odd or not", () => {
        expect(oddOrNot(isItOdd)).toEqual("odd")
    })
})

// Write the function that will make the test pass.
const oddOrNot = (number) => {
    if(number % 2 !== 0) {
        return "odd"
    }
}



// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
var fruit1 = "banana"
var fruit2 = "apple"
var fruit3 = "grape"

describe("fruitColors", () =>{
    it("returns the color of the fruits", () =>{
        expect(fruitColors(fruit1)).toEqual("yellow")
        expect(fruitColors(fruit2)).toEqual("red")
        expect(fruitColors(fruit3)).toEqual("purple")
    })
})

// Write the function that will make the test pass.
const fruitColors = (fruit) => {
    if(fruit === "banana") {
        return "yellow"
    } else if(fruit === "apple") {
        return "red" 
    } else if(fruit === "grape") {
        return "purple"
    }
}



// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
    it("returns the string morty", () =>{
        expect(rick().toEqual("morty"))
    })
})


// Write the function that will make the test pass.
const rick = () => {
    return "morty"
}



// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.




// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.



// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.



// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.



// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.



// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.