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

  type() {
      if(this.type === "black") {
          return `${this.type}`
      } else {
          return "normal"
      }
  }
}
// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
// const blackcoffee = new Coffee("black", 0, 0)
// console.log(blackcoffee.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
// const otherCoffee = new Coffee("normal", 1, 2)
// console.log(otherCoffee.coffeeProfile())




class Latte {
  constructor(flavor, milk, shot){
    this.flavor = flavor.toLowerCase()
    this.milk = milk
    this.shot = shot
  }

  latteProfile(){
    return `A ${this.flavor} latte with ${this.milks()}, ${this.shots()}`
  }

  milks(){
    if(this.milk === "almond"){
      return `${this.milk} milks`
    } else {
      return `${this.milk} milk`
    }
  }

  shots(){
    if(this.shot > 1){
      return `${this.shot} shots`
    } else {
      return `${this.shot} shot`
    }
  }

  flavor() {
      if(this.flavor === "vanilla") {
          return `${this.flavor}`
      } else if (this.flavor === "regular"){
        return "regular"
      } else {
        return "hazelnut"
      }
  }
}







// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
const regLatte = new Latte("vanilla", 2, 3)
console.log(regLatte.latteProfile())
// Write a method for your Latte class that outputs the latte's profile.
console.log(regLatte.latteProfile())

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
const goodLatte = new Latte("regular", 0, 1)
console.log(goodLatte.latteProfile())
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
const hazLatte = new Latte ("hazelnut", "almond", 2)
console.log(hazLatte.latteProfile());




// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)


class Tub {
  constructor(height,radius){
    this.height = height
    this.radius = radius
    this.pie = 3.14
  }
volume () {
  return this.height * 2 this.radius * this.pie
}

}

// Write the code that creates three unique cylinder objects

