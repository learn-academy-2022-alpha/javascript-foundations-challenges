// Consider this variable:
// var person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }
// Write the code that accesses the first name of the person object.
// console.log(person.firstName)

// Write the code that accesses the last name of the person object.
// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// person.homePlanet = "Earth"
//  console.log(person)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// var person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   getData: function(){
//     return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//   }
// }
//
// console.log(person.getData())

// // Consider this variable:
// var product = {
//   name: "chair", price: 14.99
// }
// // Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
//
// const describeProduct = (product) => {
//   return `The product is a ${product.name}. It costs $${product.price}.`
// }
// console.log(describeProduct(product))





// Consider this variable:
// var lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)
// // Write the code that access the 3rd ingredient of the lunch object.
// console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// var lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"],
//   getData: function (){
//     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
//   }
// }
// console.log(lunch.getData())
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."


// Consider this variable:
// var animals = [
//   { name: "Waffles", type: "dog", age: 12 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 },
// ]
// Create a function that takes in any array of objects and returns a new array with only those of type cat.
//
// const justCats = (array) => {
//   return (animals.filter(array => array.type === "cat"))
// }
// console.log(justCats())

// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.


// const justNames = (array) => {
//   return array.map(array => {
//     return array.name
//   })
// }
// console.log(justNames(animals))


// Consider this variable:
// let author = {
//     name: "H. G. Wells",
//     genre: "science fiction"
// }
// Write the code that destructures the author object and makes the following work:

// var {name, genre} = author
// console.log(`${name} is a ${genre} author`)
// --> "H. G. Wells is a science fiction author"


// Consider this variable:
let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}
var {species, pokemon_type} = pokeOne

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
var {species, pokemon_type} = pokeTwo

const describePokemon = (string) => {
  return `${species} is a ${pokemon_type} Pokemon`
}
// Write a function called describePokemon() that takes an object like the ones above and uses destructuring to return a description of the Pokemon such that:
console.log(describePokemon(pokeOne))
// --> "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"
