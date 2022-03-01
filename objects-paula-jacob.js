// Challenges
//#1 Consider this variable:
var person = {
    firstName: "Arthur",
    lastName: "Dent"
}
// Write the code that accesses the first name of the person object.
console.log(person.firstName)
//     Write the code that accesses the last name of the person object.
console.log(person.lastName)
//     Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
console.log(person.homePlanet)
//     Update the person object with a method that logs "Arthur Dent is from planet Earth".
person.whereFrom = function() {
    return `${this.firstName} ${this.lastName} is from ${this.homePlanet}`
}
console.log(person.whereFrom())


//------------------------------------------------------------------------------------------------------------------------->

//#2 Consider this variable:
var product = {
    name: "chair", price: 14.99
}
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
// var productName = product.name
// var productCost = product.price
// console.log(productName, productCost)

const describeProduct = (product) => {
    return `The product is a ${product.name}. It costs $${product.price}`
}
console.log(describeProduct(product))

//------------------------------------------------------------------------------------------------------------------------->

//#3 Consider this variable:
var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"]
}
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)

//Write the code that access the 3rd ingredient of the lunch object.
console.log(lunch.ingredients[2])

//Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread,
// peanut butter, and banana."

const whatIsLunch = (value) => {
    return `The ingredients for a ${lunch.name} ${lunch.type} are bread, peanut butter, and banana.`
}
console.log(whatIsLunch(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.howToMake = function () {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
}
console.log(lunch.howToMake())

//------------------------------------------------------------------------------------------------------------------------->

//#4 Consider this variable:
var animals = [
    { name: "Waffles", type: "dog", age: 12 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 },
]

//Create a function that takes in any array of objects and returns a new array with only those of type cat.

const onlyCats = (arr) => { return arr.filter(value => value.type === "cat")
}
console.log(onlyCats(animals))

//Using the same array of objects above. Create a function that returns a new array with only the names of the animals.

const onlyNames = (array) => { return array.map(value => { return value.name
})
}
console.log(onlyNames(animals))


//------------------------------------------------------------------------------------------------------------------------->
//#5 Consider this variable:
let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}
//Write the code that destructures the author object and makes the following work:
var { name, genre } = author
console.log(name)
console.log(genre)

console.log(`${name} is a ${genre} author`)
//--> "H. G. Wells is a science fiction author"

//------------------------------------------------------------------------------------------------------------------------->
//#6 Consider this variable:
let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description
// of the Pokemon such that:
// console.log(describePokemon(pokeOne))
//--> "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
//--> "Magikarp is a Water pokemon"

var { species, pokemon_type} = pokeTwo
var { species, pokemon_type} = pokeOne

const describePokemon = (obj) => {
    let {species, pokemon_type} = obj
    return `${species} is a ${pokemon_type} type.`
}

console.log(describePokemon(pokeOne))
console.log(describePokemon(pokeTwo))
