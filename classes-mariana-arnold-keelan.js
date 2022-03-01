//#1 Coffee Maker
//pseudocode
//Write the code that makes a black coffee. 
//outputs the coffee's profile.
//Write the code that makes a coffee with 1 cream and 2 sugars.
//write the code that outputs the coffee's profile.


// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile(){
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams(){
//     if(this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars(){
//     if(this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
// var BlackCoffee = new Coffee("black", 1, 2)
// //return this.coffeeProfile 

// console.log(BlackCoffee.coffeeProfile())


// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.

// var BlackCoffee = new Coffee("black", 0, 0)
//console.log(BlackCoffee)

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

//var BlackCoffee = new Coffee("black", 1, 2)
//console.log(BlackCoffee.coffeeProfile())

//#2 Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.

class Latte {
    constructor(flavor, milk, shots){
        this.flavor = flavor.toLowerCase()
        this.milk = milk
        this.shots = shots
    }

// Write a method for your Latte class that outputs the latte's profile.

latteProfile(){
    return `A ${this.flavor} coffee with ${this.milk()}, ${this.shots()}`
}
}


// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

var singleShot = new Latte("vanilla", 2, 1)
console.log(singleShot.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// #3Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that creates three unique cylinder objects