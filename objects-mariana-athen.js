// Challenges
//#1 Consider this variable:
var person = {
   firstName: "Arthur",
   lastName: "Dent",
   homePlanet: "earth",
   arthurInfo: function() {
       return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
   }
 }
console.log(person.arthurInfo());
// Write the code that accesses the first name of the person object.
console.log(person.firstName)

// Write the code that accesses the last name of the person object.
console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.


// Update the person object with a method that logs "Arthur Dent is from planet Earth".



//#2 Consider this variable:
 var product = {
  name: "chair",
  price: 14.99,
  describeProducts: function() {
    return `The product is a ${this.name}. It costs $${this.price}.`
  }
 }
 console.log(product.describeProducts())
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
const describeProduct = (object) => {
  return `The product is a ${object.name}. It costs $${object.price}.`
}
console.log(describeProduct(product))




//#3 Consider this variable:
var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  lunchIngredients: function() {
    return `The ingredients for a PB and Banana sandwich are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
  }
}
console.log(lunch.lunchIngredients())
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
// Write the code that accesses the 3rd ingredient of the lunch object.
console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const ingredientsForSandwich = (object) => {
  return `The ingredients for a PB and Banana sandwich are ${object.ingredients[0]}, ${object.ingredients[1]}, and ${object.ingredients[2]}.`
}
console.log(ingredientsForSandwich(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// Consider this variable:
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]
// Create a function that takes in any array of objects and returns a new array with only those of type cat.
const catType = (array) => {
  return array.filter(value => {
    return value.type === "cat"
  })
}
console.log(catType(animals))
// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.
const animalNames = (array) => {
  return array.map(value => {
    return value.name
  })
}
console.log(animalNames(animals))
// Consider this variable:
let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}
// Write the code that destructures the author object and makes the following work:
let {name, genre} = author
console.log(`${name} is a ${genre} author`)
//--> "H. G. Wells is a science fiction author"
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
const describePokemon = (object) => {
  if(object === pokeOne){
    let {species, pokemon_type} = pokeOne
    return `${species} is a ${pokemon_type} pokemon.`
  } else {
    let {species, pokemon_type} = pokeTwo
    return `${species} is a ${pokemon_type} pokemon.`
  }
}
console.log(describePokemon(pokeOne))
//--> "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
//--> "Magikarp is a Water pokemon"
