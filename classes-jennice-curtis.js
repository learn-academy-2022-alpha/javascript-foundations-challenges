
// Coffee Maker
class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams(){
    if(this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if(this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
//pseudo: create an object black using Coffee class, with constructor function and keyword "new"
// var black = new Coffee("black", 0, 0)
// console.log(black.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
//pseudo: create an object black using coffeeTwo class, with constructor function and keyword "new"
var coffeeTwo = new Coffee("",1, 2)
console.log(coffeeTwo.coffeeProfile())

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.

class Latte {
  constructor(flavor, milk, shots){
    this.flavor = flavor.toLowerCase()
    this.milk = milk
    this.shots = shots
  }

  // Write a method for your Latte class that outputs the latte's profile.
  //

  latteProfile(){
    return `A ${this.flavor} latte with ${this.milk} milk, ${this.shotNum()}`
  }

  // milkType(){
  //   if(this.milk > 1){
  //     return `${this.milk} milk`
  //   } else {
  //     return `${this.cream} milk`
  //   }
  // }

  shotNum(){
    if(this.shots > 1){
      return `${this.shots} shots`
    } else {
      return `${this.shots} shot`
    }
  }
}

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// var latteOne = new Latte("regular","no",1)
// console.log(latteOne.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

var latteOne = new Latte("hazlenut","almond",2)
console.log(latteOne.latteProfile())

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

//pseudo:
//create class Cylinder
//set parameters radius and height in class in constructor
//set profile to return formula = π * radius *2 * height

class Cylinder{
  constructor(radius,height){
  this.radius = radius
  this.height = height
  }
  volume(){
    return Math.PI*this.radius*2*this.height
  }
}

var cylinderOne = new Cylinder(2,10)
console.log(cylinderOne.volume().toFixed(4))

// Write the code that creates three unique cylinder objects

var cylinderOne = new Cylinder(300,50)
console.log(cylinderOne.volume().toFixed(4))

var cylinderOne = new Cylinder(50,47)
console.log(cylinderOne.volume().toFixed(4))
