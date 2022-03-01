// 1. Coffee Maker
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
const blackCoffee = new Coffee("black", 0, 0)
console.log(blackCoffee)
console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

const exSweet = new Coffee ("Extra Sweet", 1, 2)
console.log(exSweet.coffeeProfile())

// 2. Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

class Latte {
    constructor(flavor, milk, shots){
      this.flavor = flavor.toLowerCase()
      this.milk = milk
      this.shots = shots
    }
  
    latteProfile(){
      return `A ${this.flavor} latte with ${this.milk} and ${this.shots} shots of latte`
    }
  
  }

const singleShot = new Latte ("Regular", "2%", 1)
const doubleShot = new Latte ("hazelnut", "almond", 2)

// console.log(singleShot.latteProfile())
console.log(doubleShot.latteProfile())



// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class CylinderVolume {
  constructor(radius, height){
    this.pie = 3.14159
    this.radius = radius ** 2
    this.height = height
  }

  volume(){
    return `The volume of a cylinder is ${this.pie * this.radius * this.height}.`
  }

}
const aCylinder = new CylinderVolume(5, 6)
console.log(aCylinder.volume())