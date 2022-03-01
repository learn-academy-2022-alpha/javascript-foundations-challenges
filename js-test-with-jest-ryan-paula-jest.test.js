// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// const { it } = require("jest-circus")

// const { expect } = require("@jest/globals")

// const { it } = require("jest-circus")


// describe a method 
describe("ifYoureTired", () => {
// a test/it method, nested within the describe block
    it("returns drink coffee or keeps working based on input", () => {
// an expect method, nested within the test block
        expect(ifYoureTired("Yes")).toEqual("drink coffee")
        expect(ifYoureTired("no")).toEqual("keep working")
    })
})
// create a function 
const ifYoureTired = (string) => {
// create conditonal 
    if(string === "Yes"){
// return the strings
        return "drink coffee"
    } else {
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// decribe a method 
describe("areYouStressed", () => {
// a test/it method, nested within the describe block
    it("returns relax or keep going based on the input", () => {
// an expect method, nested within the test block
        expect(areYouStressed("Yes")).toEqual("relax")
        expect(areYouStressed("No")).toEqual("keep going")
    })
})

// create a function 
const areYouStressed = (string) => {
// create conditonals 
    if(string === "Yes"){
        return "relax"
    }else{
        return "keep going"
    }
}


// Write the test for a function that returns "in budget" if a price is lower than $300.

// describe a method 
describe("inBudget", () => {
// a test/it method, nested within the describe block
    it("return a string based on input", () => {
// an expect method, nested within the test block
        expect(inBudget(30)).toEqual("in budget")
        expect(inBudget(1000)).toEqual("not in budget")
    })
})

// create a function 
const inBudget = (number) => {
// create conditonal
    if(number < 300){
        return "in budget"
    } else {
        return "not in budget"
    }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

// describe a method 
describe("smallerNumber", (num1,num2) => {
// a test/it method, nested within the describe block
    it("returns the smaller number based on input", () => {
// an expect method, nested within the test block
        expect(smallerNumber(10,20)).toEqual("its smaller")
        expect(smallerNumber(20,10)).toEqual("its smaller")
    })
})
// create a function 
const smallerNumber = (num1, num2) => {
// create conditonal
    if(num1 < num2 ){
        return "its smaller"
    }else {
        return "its smaller"
    }
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

// describe a method 
describe("odd", (number) => {
// a test/it method, nested within the describe block
    it("returns a string based on input", () => {
// an expect method, nested within the test block
        expect(odd(3)).toEqual("its odd")
    })
})
// create a function 
const odd = (number) => {
// create conditonal
    if(number % 2 !== 0){
        return "its odd"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.


//describe a method 
describe("fruitColor", (fruit) => {
// a test/it method, nested within the describe block
    it("return a string based on input", () => {
// an expect method, nested within the test block
        expect(fruitColor("banana")).toEqual("Yellow")
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("grape")).toEqual("purple")
    })
})

// create a function 
const fruitColor = (fruit) => {
    if (fruit === "banana"){
    return "Yellow"
    }else if 
        (fruit === "apple"){
            return "red"
        }else{
            (fruit === "grape")
            return "purple"
        }
    }


    // Write the test for a function called rick that returns "Morty".

    describe("rick", (string) => {
        it("returns a string based on input", () => {
            expect(rick("Rick")).toEqual("morty")
        })
    })

    const rick = (string) => {
        if(string === "Rick"){
            return "morty"
        }
    }

    // Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

    describe("name", )