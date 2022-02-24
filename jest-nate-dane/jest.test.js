// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("thirsty", () => {
    it("returns drink coffee if you are tired, or keep working if you are not", () => {
        expect(thirsty("yes")).toEqual("drink coffee")
        expect(thirsty("no")).toEqual("keep working")
    })
})

// Write the function that will make the test pass.

const thirsty = (tired) => {
    if (tired === "yes") {
        return "drink coffee"
    } else if (tired === "no") {
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("feeling", () => {
    it("returns relax if you are stressed, and keep going if you are not stressed", () => {
        expect(feeling("yes")).toEqual("relax")
        expect(feeling("no")).toEqual("keep going")
    })
})

// Write the function that will make the test pass.

const feeling = (energy) => {
    if (energy === "yes") {
        return "relax"
    } else if (energy === "no") {
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("budget", () => {

    it("returns in budget if a price is lower than $300", () => {
        expect(budget(299)).toEqual("in budget")
    })
})

// Write the function that will make the test pass.

const budget = (money) => {
    if (money < 300) {
        return "in budget"
    }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

describe("lower", () => {
    it("returns the smaller number", () => {
        expect(lower(2, 5)).toEqual(2)
        expect(lower(22, 25)).toEqual(22)
    })
})

// Write the function that will make the test pass.

const lower = (numb1, numb2) => {
    if (numb1 < numb2) {
        return numb1
    } else {
        return numb2
    }
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("odd", () => {
    it("returns whether the number is odd", () => {
        expect(odd(7)).toEqual("odd")
        expect(odd(10)).toEqual("even")
    })
})


// Write the function that will make the test pass.

const odd = (num1) => {
    if (num1 % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruit", () => {
    it("returns yellow if the argument is banana, red if apple and purple if grape", () => {
        expect(fruit("banana")).toEqual("yellow")
        expect(fruit("apple")).toEqual("red")
        expect(fruit("grape")).toEqual("purple")
    })
})

// Write the function that will make the test pass.

const fruit = (type) => {
    if (type === "banana") {
        return "yellow"
    } else if (type === "apple") {
        return "red"
    } else if (type === "grape") {
        return "purple"
    }
}

// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
    it("returns Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})

// Write the function that will make the test pass.

const rick = () => "Morty"

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeter", () => {
    it("returns a greeting with that name to the screen", () => {
        expect(greeter("Bob")).toEqual("Hello, Bob")
        expect(greeter("Rick")).toEqual("Hello, Rick")
    })
})

// Write the function that will make the test pass.

const greeter = name => `Hello, ${name}`

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("oddOrEven", () => {
    it("returns whether the number is odd or even", () => {
        expect(oddOrEven(20)).toEqual("even")
        expect(oddOrEven(21)).toEqual("odd")
    })
})

// Write the function that will make the test pass.

const oddOrEven = num => {
    if (num % 2 === 0) {
        console.log("even")
        return "even"
    }
    else {
        console.log("odd")
        return "odd"
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
    it("returns the result of the number multiplied by 2", () => {
        expect(doubler(20)).toEqual(40)
        expect(doubler(21)).toEqual(42)
    })
})

// Write the function that will make the test pass.

const doubler = num => num * 2

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("multiply", () => {
    it("returns the result of one of the numbers multiplied by the other", () => {
        expect(multiply(5, 5)).toEqual(25)
    })
})

// Write the function that will make the test pass.

const multiply = (num1, num2) => num1 * num2

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

describe("divisibleBy", () => {
    it("returns whether the first number is evenly divisible by the second", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
        expect(divisibleBy(12, 5)).toEqual("12 is not evenly divisible by 5")
    })
})

// Write the function that will make the test pass.

const divisibleBy = (num1, num2) =>  {
    if (num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    } else {
        return `${num1} is not evenly divisible by ${num2}`
    }
}


// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.

describe("fizzbuzz", () => {
    it("If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'", () => {
        expect(fizzbuzz(3)).toEqual("fizz")
        expect(fizzbuzz(5)).toEqual("buzz")
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
        expect(fizzbuzz(7)).toEqual(7)
    })
})

// Write the function that will make the test pass.

const fizzbuzz = num => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz"
    }
    else if (num % 3 === 0) {
        return "fizz"
    }
    else if (num % 5 === 0) {
        return "buzz"
    }
    else {
        return num
    }
}