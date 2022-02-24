// // Consider this variable:
//  var person = {
//    firstName: "Arthur",
//    lastName: "Dent"
//  }
// // Write the code that accesses the first name of the person object.
// // Access the object "person" using . notation to access key value pair for first name
// console.log(person.firstName)
//
// // Write the code that accesses the last name of the person object.
// // Access the object "person" using . notation to access key value pair for last name
// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
//Access the person object using .notation to create a key value pair equaling the string "Earth"
//
// person.homePlanet = "Earth"
//
// console.log(person)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

//Access the person object using .notation in console.log to access each key value pair and use string interpolation to return "Arther Dent is from planet Earth"

// console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanet}`)


//  //Consider this variable:
//  var product = {
// name: "chair", price: 14.99
//   }

// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
//Create a function called describeProduct will access product object and use interpolation to return "The product is a (name). It costs (price)"

// const describeProduct = (banana) => {
//   return `The product is a ${banana.name}. It costs ${banana.price}.`
// }
// console.log(describeProduct(product))

// Consider this variable:
 //var lunch = {
 //  name: "PB and Banana",
  // type: "sandwich",
   //ingredients: ["bread", "peanut butter", "banana"]
//}

// Write the code that accesses the ingredients property.
//run console log that accesses the lunch object with . notation for the ingredients key values

// console.log(lunch.ingredients)

// Write the code that access the 3rd ingredient of the lunch object.
//run console log that access the lunch object with . notation for the 3rd ingredient from ingredients key values

// console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//Create a function that takes lunch object and returns a string that says "the ingredients for a PB and banana sandwich are bread, peanut butter, and banana"
//
//const mealTime = (object) => {
  //  return `The ingredients for a ${object.name} ${object.type} are $///////{object.ingredients[0]}, ${object.ingredients[1]}, and ${object.///////ingredients[2]}.`
 //}
//
// console.log(mealTime(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

//lunch.string = mealTime

 //console.log()

// Consider this variable:
//var animals = [
  //{ name: "Waffles", type: "dog", age: 12 },
  //{ name: "Fluffy", type: "cat", age: 14 },
  //{ name: "Spelunky", type: "dog", age: 4 },
  //{ name: "Hank", type: "cat", age: 11 },
//]

// Create a function that takes in any array of objects and returns a new array with only those of type cat.
//pseudo code:
// Create a function that checks an array
// Function will itterate through the array
// Create conditional that checks each itteration if is type: catch
// If cat then adds to new array,
// If not cat then ignores

// const catsOnly = (array)=>{
  
//   return array.filter(value => value.type == "cat")  
// }
// console.log(catsOnly(animals))


// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.
// //create a function that takes an array iterate thru array and returns name of animals
// const nameOnly = (array)=>{
//   return array.map(value=>{
//     return value.name
//   })
// }
// console.log(nameOnly(animals))
// Consider this variable:
let author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// Write the code that destructures the author object and makes the following work:
//assign a variable for name and variable for genre
//write the code that access the key value for name from object
//write the code that access the key value for genre from object
const name = author.name 
const genre = author.genre

//console.log(`${name} is a ${genre} author`)
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
var describePokemon = (object)=>{
return `${object.species} is a ${object.pokemon_type} pokemon`
}

console.log(describePokemon(pokeOne))
//--> "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
//--> "Magikarp is a Water pokemon"
