// Consider this variable:
// var person = {
//     firstName: "Arthur",
//     lastName: "Dent"
// }
// Write the code that accesses the first name of the person object.

// console.log(person.firstName)

// Write the code that accesses the last name of the person object.

// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// var person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth"
// }

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

// var person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     planet: "Earth",
//     homePlanet: function () {
//         return `${this.firstName} ${this.lastName} is from planet ${this.planet}`
//     }
// }
// console.log(person.homePlanet())

// Consider this variable:
// var product = {
//     name: "chair", price: 14.99
// }

// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

// var product = {
//     describeProduct: function () {
//         return `The product is a chair. It costs $14.99`
//     }
// }
// console.log(product.describeProduct())

// Consider this variable:
// var lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"]
// }

// Write the code that accesses the ingredients property.

// console.log(lunch.ingredients)

// Write the code that access the 3rd ingredient of the lunch object.

// console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// var lunch = {
//     lunchObject: function () {
//         return `The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana.`
//     }
// }
// console.log(lunch.lunchObject())

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// var lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     lunchObject: function () {
//         return `The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana.`
//     }
// }
// console.log(lunch.lunchObject())

// Consider this variable:
// var animals = [
//     { name: "Waffles", type: "dog", age: 12 },
//     { name: "Fluffy", type: "cat", age: 14 },
//     { name: "Spelunky", type: "dog", age: 4 },
//     { name: "Hank", type: "cat", age: 11 },
// ]


// Create a function that takes in any array of objects and returns a new array with only those of type cat.
// const petType = (array) => {
//   return array.map(value => {
//     return value.type
//   })
// }
// var typeCat = animals.filter(value => value.type === "cat")
// console.log(typeCat)


// Using the same array of objects above.Create a function that returns a new array with only the names of the animals.


// Consider this variable:
// let author = {
//     name: "H. G. Wells",
//     genre: "science fiction"
// }


// Write the code that destructures the author object and makes the following work:
// console.log(`${name} is a ${genre} author`)
// var { name, genre } = author


// --> "H. G. Wells is a science fiction author"


// Consider this variable:
let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire",
    describePokemon: function(){
      return `${this.species} is a ${this.pokemon_type} pokemon.`
    }
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water",
    describePoke: function(){
      return `${this.species} is a ${this.pokemon_type} pokemon.`
    }
}


// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:
 console.log(pokeOne.describePokemon())
// --> "Charmandar is a Fire pokemon"
 //
 console.log(pokeTwo.describePoke())
// --> "Magikarp is a Water pokemon"
