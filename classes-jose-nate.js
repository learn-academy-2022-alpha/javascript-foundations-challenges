// Challenges
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
let blackCoffee = new Coffee("black", 0, 0)
console.log(blackCoffee.coffeeProfile())


// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
let sugarCoffee = new Coffee("sugar", 1, 2)
console.log(sugarCoffee.coffeeProfile())

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte{
  constructor(flavor, milkType, shots){
    this.flavor = flavor,
    this.milkType = milkType,
    this.shots = shots
  }

// Write a method for your Latte class that outputs the latte's profile.
latteProfile(){
  return `A ${this.flavor} latte that has ${this.milkType} milk with ${this.shots} shot of espresso.`
  }
}

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var newLatte = new Latte("vanilla", "whole", 1)
console.log(newLatte.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var anotherOne = new Latte("hazelnut", "almond", 2)
console.log(anotherOne.latteProfile())


// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class VolumeOfCyl {
  constructor (radius, cylinder) {
    this.radius = radius,
    this.height = cylinder
  }
  calculateVolume() {
    var volume = 3.14 * this.radius ** 2 * this.height
    return volume
  }
}

// Write the code that creates three unique cylinder objects
var newCyl = new VolumeOfCyl(2, 4)
var newCyl2 = new VolumeOfCyl(5, 10)
var newCyl3 = new VolumeOfCyl(15, 20)
console.log(newCyl.calculateVolume())
console.log(newCyl2.calculateVolume())
console.log(newCyl3.calculateVolume())
