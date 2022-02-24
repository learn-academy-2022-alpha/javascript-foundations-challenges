// Challenges
// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.
//
// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.
//
// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

describe("areYouTired", () => {
  it("returns a string that says drink coffee if youre tired, and keep working if youre not tired", () => {
    expect(areYouTired("tired")).toEqual("drink coffee")
    expect(areYouTired("not tired")).toEqual("keep working")
  })
})

const areYouTired = (string) => {
  if (string === "tired") {
    return "drink coffee"
  } else if (string === "not tired") {
    return "keep working"
  }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

describe("areYouStress", () => {
  it("returns a string that says relax if youre stressed, and keep going if youre not stressed", () => {
    expect(areYouStress("stressed")).toEqual("relax")
    expect(areYouStress("not stressed")).toEqual("keep going")
  })
})

const areYouStress = (string) => {
  if (string === "stressed") {
    return "relax"
  } else {
    return "keep going"
  }
}


// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.


describe("budget", () => {
  it("returns a string that says in budget if a price is lower than $300", () => {
    expect(budget(300)).toEqual("not in budget")
    expect(budget(299)).toEqual("in budget")
  })
})


const budget = (number) => {
  if (number < 300) {
    return "in budget"
  } else {
    return "not in budget"
  }
}


// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.

describe("number", () => {
  it("returns the smaller number", () => {
    expect(number(1, 5)).toEqual(1)
    expect(number(20, 100)).toEqual(20)
  })
})

const number = (num1, num2) => {
  if (num1 < num2) {
    return num1
  } else {
    return num2
  }
}


// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.

describe("odd", () => {
  it("returns if the passed number is odd", () => {
    expect(odd(5)).toEqual("it's odd")
  })
})

const odd = (num) => {
  if (num % 2 !== 0) {
    return "it's odd"
  }
}


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.


describe("color", () => {
  it("returns yellow if its a banana, red if its an apple, purple if its a grape", () => {
    expect(color("banana")).toEqual("yellow")
    expect(color("apple")).toEqual("red")
    expect(color("grape")).toEqual("purple")
  })
})

const color = (string) => {
  if (string === "banana") {
    return "yellow"
  } else if (string === "apple") {
    return "red"
  } else if (string === "grape") {
    return "purple"
  }
}


// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.

describe("rick", () => {
  it("returns Morty", () => {
    expect(rick()).toEqual("Morty")
  })
})

const rick = () => {
  return "Morty"
}


// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.

describe("greeter", () => {
  it("returns a greeting with that name", () => {
    expect(greeter("Jose")).toEqual("Greeting, Jose")
  })
})

const greeter = (name) => {
  return `Greeting, ${name}`
}


// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.

describe("oddOrEven", () => {
  it("returns odd if the number is odd, and even if its even", () => {
    expect(oddOrEven(5)).toEqual("odd")
    expect(oddOrEven(6)).toEqual("even")
  })
})


const oddOrEven = (num) => {
  if (num % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}



// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.
