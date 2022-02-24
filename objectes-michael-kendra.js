// // Consider this variable:
// // var person = {
// // firstName: "Arthur",
// // lastName: "Dent"
// // }
// // Write the code that accesses the first name of the person object.
// // console.log(person.firstName)
// // // Write the code that accesses the last name of the person object.
// // console.log(person.lastName)
// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// var person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth"
// }
// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanet}`)

// // Consider this variable:
// var product = {
//     name: "chair", price: 14.99
// }

// // Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

// const describeProduct = () => {
//     return `The product is a ${product.name}. It costs $${product.price}.`
// }
// console.log(describeProduct(product))

// //Consider this variable:
// var lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"]
// }
// // Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)

// // Write the code that access the 3rd ingredient of the lunch object.
// console.log(lunch.ingredients[2])

// // Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// const lunchYum = () => {
//     return `The ingredients for a PB and Banana sandwich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
// }
// console.log(lunchYum(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    lunchYum: function () {
        return `The ingredients for a PB and Banana sandwich are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
    }
}
console.log(lunch.lunchYum())

// Consider this variable:
var animals = [
    { name: "Waffles", type: "dog", age: 12 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 },
]
// Create a function that takes in any array of objects and returns a new array with only those of type cat.
const catsAreCool = (array) => {
    return array.filter(animals => animals.type === "cat")
}
console.log(catsAreCool(animals))

// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.
const namesAreCool = (array) => {
    return array.map(animals => animals.name)
}
console.log(namesAreCool(animals))

// Consider this variable:
let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}

// Write the code that destructures the author object and makes the following work:
let { name, genre } = author
console.log(`${name} is a ${genre} author`)

// --> "H. G. Wells is a science fiction author"

// Consider this variable:
let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}

// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:
const describePokemon = (pokeMon) => {
    let { species, pokemon_type } = pokeMon
    return `${species} is a ${pokemon_type} pokemon`
}

console.log(describePokemon(pokeOne))
// --> "Charmandar is a Fire pokemon"

console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"