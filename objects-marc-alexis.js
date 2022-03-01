var person = {
    firstName: "Arthur",
    lastName: "Dent"
  }
//   Write the code that accesses the first name of the person object.
console.log(person.firstName);
//   Write the code that accesses the last name of the person object.
console.log(person.lastName);
//   Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
var person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth"
}
console.log(person.homePlanet)
//   Update the person object with a method that logs "Arthur Dent is from planet Earth"
var person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    home: function() {
        return this.firstName + " " + this.lastName + " is from planet " + this.homePlanet 
    }
}
console.log(person.home());

var product = {
    name: "chair", price: 14.99
  }
//   Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
const describeProduct = (obj) => {
    return `The product is a ${obj.name}. It costs $${obj.price}`
}
console.log(describeProduct(product));

var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"]
  }
//   Write the code that accesses the ingredients property
console.log(lunch.ingredients);
//   Write the code that access the 3rd ingredient of the lunch object.
console.log(lunch.ingredients[2]);
//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const lunchObject = (obj) => {
    return `The ingredients for ${obj.name} ${obj.type} are ${obj.ingredients[0]}
, ${obj.ingredients[1]}, and ${obj.ingredients[2]}. `
}
console.log(lunchObject(lunch));
//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    lunchObj: function() {
        return `The ingredients for ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}. `
    }
}
console.log(lunch.lunchObj());

var animals = [
    { name: "Waffles", type: "dog", age: 12 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 },
  ]
//   Create a function that takes in any array of objects and returns a new array with only those of type cat.
const catType = (array) => {
    return array.filter(a => {
        if (a.type === "cat") {
            return a
        }
    })
}
console.log(catType(animals));
//   Using the same array of objects above. Create a function that returns a new array with only the names of the animals.
const catName = (array) => {
    return array.map(a => { 
        return a.name
    })
}
console.log(catName(animals));


// Consider this variable:
let author = {
    name: "H. G. Wells",
    genre: "science fiction"

}

// Write the code that destructures the author object and makes the following work:
let {name} = author
let {genre} = author


console.log(`${name} is a ${genre} author`)
// --> "H. G. Wells is a science fiction author"



// Consider this variable:
// let pokeOne = {
//     species: "Charmandar",
//     pokemon_type: "Fire"
// }

// let pokeTwo = {
//     species: "Magikarp",
//     pokemon_type: "Water"
// }
// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:
// console.log(describePokemon(pokeOne))
// --> "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"

let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}
let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:
const describePokemon = (obj) => {
    let {species, pokemon_type} = obj
    return `${species} is a ${pokemon_type} pokemon`
}
console.log(describePokemon(pokeOne))
// --> "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"

// completed challenge