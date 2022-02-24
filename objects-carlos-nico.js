var person = {
    firstName: "Arthur",
    lastName: "Dent"
  }

//   Write the code that accesses the first name of the person object.

console.log(person.firstName)

// Write the code that accesses the last name of the person object.

console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

person.homePlanet = "earth"
// Update the person object with a method that logs "Arthur Dent is from planet Earth".

console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanet}`)

var product = {
    name: "chair", price: 14.99
  }

//   Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

console.log(`The product is a chair. It costs ${product.price}`)

var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    getData: function() {
        return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}`
    }
  }

 
//   Write the code that accesses the ingredients property.

console.log(lunch.ingredients)

// Write the code that access the 3rd ingredient of the lunch object.

console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const lunchIng = () => {
    return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients}`
}

// console.log(lunchIng())

console.log(lunch.getData)

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

console.log(lunch.getData())

var animals = [
    { name: "Waffles", type: "dog", age: 12 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 },
  ]

//   Create a function that takes in any array of objects and returns a new array with only those of type cat.

const onlyCats = (array) => {
    return array.map(value =>{
        return value.type(cat)
    })
}

console.log(onlyCats(animals))
// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.