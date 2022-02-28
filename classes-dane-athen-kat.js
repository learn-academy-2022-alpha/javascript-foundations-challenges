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

const coffee = new Coffee("black", 0, 0)
console.log(coffee.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

const americano = new Coffee("americano", 1, 2)
console.log(americano.coffeeProfile())

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.

class Latte {
    constructor(flavor, milk, shots) {
        this.flavor = flavor
        this.milk = milk
        this.shots = shots
    }
    latteProfile(){
      return `A ${this.flavor}${this.noMilkType()} latte with a ${this.shots} shot.`
    }
    noMilkType(){
    if(this.milk.length < 1){
      return ""
    } else{
      return ` with ${this.milk} milk`
    }
  }
}

// Write a method for your Latte class that outputs the latte's profile.


// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
 const singleLatte = new Latte("regular", "", "single")
 console.log(singleLatte.latteProfile());
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
const hazelLatte = new Latte("hazelnut", "almond", "double")
console.log(hazelLatte.latteProfile());

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class Cylinder {
  constructor(radius, height){
    this.radius = radius
    this.height = height
    this.pi = Math.PI
  }
  calculateVolume(){
    const volume = this.pi*(this.radius**2)*this.height
    return volume.toFixed(4)
  }
}
// Write the code that creates three unique cylinder objects
const cylinder1 = new Cylinder(2,5)
console.log(cylinder1.calculateVolume())

const cylinder2 = new Cylinder(3,6)
console.log(cylinder2.calculateVolume())

const cylinder3 = new Cylinder(5,10)
console.log(cylinder3.calculateVolume())
