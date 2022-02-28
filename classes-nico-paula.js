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
var coffee = new Coffee("black", 1 , 2)
console.log(coffee.coffeeProfile())
// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
//
// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.



// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte {
  constructor(flavor, milk, shot){
    this.flavor = flavor
    this.milk = milk
    this.shot = shot
  }
// Write a method for your Latte class that outputs the latte's profile.
  latteProfile(){
    return `A ${this.flavor} latte with ${this.milk} milk, ${this.shot} shot`
  }
}
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var latte = new Latte("chai", "regular", 1)
console.log(latte.latteProfile());
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var latte1 = new Latte("hazelnut", "almond", "double")
console.log(latte1.latteProfile());



// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
class Cylinder {
  constructor(radius, height) {
    this.radius = radius
    this.height = height
    this.pi = 3.14
  }
  cylinderProfile(){
    return this.pi * this.radius** 2 * this.height
  }
}
const cylinder = new Cylinder(3, 6)
console.log (cylinder.cylinderProfile());

// Write the code that creates three unique cylinder objects
