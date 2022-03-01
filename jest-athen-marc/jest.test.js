// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("areYouTired", () => {
  it("returns a string that says drink coffee if you are tired or keep working if you are not tired", () => {
    expect(areYouTired("yes")).toEqual("drink coffee")
    expect(areYouTired("no")).toEqual("keep working")
  })
})
// Write the function that will make the test pass.
const areYouTired = (string) => {
  if(string === "yes"){
    return "drink coffee"
  } else {
    return "keep working"
  }
}
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("areYouStressed", () => {
  it("returns a string that says relax if you are stressed or keep going if you are not stressed", () => {
    expect(areYouStressed("yes")).toEqual("relax")
    expect(areYouStressed("no")).toEqual("keep going")
  })
})
// Write the function that will make the test pass.
const areYouStressed = (string) => {
  if(string === "yes"){
    return "relax"
  } else {
    return "keep going"
  }
}
// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("inBudget", () => {
  let num1 = 250
  let num2 = 350
  it("returns a string that says in budget if a price is lower than $300", () => {
    expect(inBudget(num1)).toEqual("in budget")
    expect(inBudget(num2)).toEqual("not in budget")
  })
})
// Write the function that will make the test pass.
const inBudget = (number) => {
  if(number >= 300){
    return "not in budget"
  } else{
    return "in budget"
  }
}
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe("smallNumber",() => {
  it("returns the smaller number from the pair of numbers", () => {
    expect(smallNumber(10, 5)).toEqual(5)
  })
})
// Write the function that will make the test pass.
const smallNumber = (num1, num2) => {
  if(num1>num2){
    return num2
  } else if(num1<num2){
    return num1
  } else {
    return "Please enter different values."
  }
}
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
describe("isNumberOdd", () => {
  it("returns a string that says whether or not the number is odd", () => {
    expect(isNumberOdd(3)).toEqual("odd")
  })
})
// Write the function that will make the test pass.
const isNumberOdd = (num) => {
  if(num % 2 !== 0){
    return "odd"
  } else{
    return "even"
  }
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitSelect",() => {
  it("returns yellow if argument is banana, red if argument is apple, and purple if argument is grape", () => {
        expect(fruitSelect("banana")).toEqual("yellow")
        expect(fruitSelect("apple")).toEqual("red")
        expect(fruitSelect("grape")).toEqual("purple")
  })
})
// Write the function that will make the test pass.
const fruitSelect = (fruit) => {
    if (fruit === "banana") {
        return "yellow"
    } else if (fruit === "apple") {
        return "red"
    } else {
        return "purple"
    }
}
// Write the test for a function called rick that returns "Morty".
describe("rickAndMorty" , () => {
    it("returns a string called Morty", () => {
        expect(rickAndMorty()).toEqual("Morty")
    })
})
// Write the function that will make the test pass.
const rickAndMorty = () => {
    return "Morty"
}
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
describe("greeter", () => {
    let name = "Marc"
    it("return a string of a given name", () => {
        expect(greeter(name)).toEqual(`Hello ${name}, how's your day?`)
    })
})
// Write the function that will make the test pass.
const greeter = (name) => {
    return `Hello ${name}, how's your day?`
}
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () => {
    it("returns a string saying if the number is odd or even.", () => {
        expect(oddOrEven(5)).toEqual("odd")
        expect(oddOrEven(2)).toEqual("even")
    })
})
// Write the function that will make the test pass.
const oddOrEven = (num) => {
    if (num % 2 === 1) {
        return "odd"
    } else {
        return "even"
    }
}
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
describe("doubler", () => {
    it("returns the result of the number multiplied by 2", () => {
        expect(doubler(5)).toEqual(10)
    })
})
// Write the function that will make the test pass.
const doubler = (num) => {
    return num * 2
}
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("multiply", () => {
    it("returns result of one of the numbers multiplied by the other number", () => {
        expect(multiply(7, 5)).toEqual(35)
    })
})
// Write the function that will make the test pass.
const multiply = (num1, num2) => {
    return num1 * num2
}
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisibleBy", () => {
    it("returns if the first number is divisible by the second number", () => {
        expect(divisibleBy(25, 5)).toEqual("25 is evenly divisible by 5")
        expect(divisibleBy(16, 3)).toEqual("16 is not divisible by 3")
    })
})
// Write the function that will make the test pass.
const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}`
    } else {
        return `${num1} is not divisible by ${num2}`
    }
}
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
describe("fizzbuzz", () => {
    it("returns fizz if number is divisible by 3, buzz if number if divisible by 5 and fizzbuzz if the number is divisible by both 3 and 5", () => {
        expect(fizzbuzz(30)).toEqual("fizzbuzz")
        expect(fizzbuzz(9)).toEqual("fizz")
        expect(fizzbuzz(10)).toEqual("buzz")
    })
})
// Write the function that will make the test pass.
const fizzbuzz = (num1) => {
    if (num1 % 3 === 0 && num1 % 5 === 0) {
        return "fizzbuzz"
    } else if (num1 % 3 === 0) {
        return "fizz"
    } else if (num1 % 5 === 0) {
        return "buzz"
    } else {
        return num1
    }
}
