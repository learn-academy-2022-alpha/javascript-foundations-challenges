// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// class Car {
//   constructor(modelParam, yearParam) {
//   this.model = modelParam
//   this.year = yearParam
//   this.wheels = 4
//   }
// }

// class myCar extends Car {
//   constructor(modelParam, yearParam){
//     super(modelParam, yearParam)
//   }
// }
//
// class Tesla extends Car {
//   constructor(modelParam, yearParam){
//     super(modelParam, yearParam)
//   }
// }
//
// let myTesla = new Tesla("X", 2020)
//
// // let car = new myCar("Tesla", 2020)
// // console.log(car)
//
// console.log(myTesla)


// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// class Car {
//   constructor(modelParam, yearParam) {
//   this.model = modelParam
//   this.year = yearParam
//   this.wheels = 4
//   }
// }
//
// class Toyota extends Car {
//   constructor(modelParam, yearParam) {
//     super(modelParam, yearParam)
//   }
// }
//
// let myToyota = new Toyota("Highlander", 2017)
// console.log(myToyota)

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// class Car {
//   constructor(modelParam, yearParam) {
//   this.model = modelParam
//   this.year = yearParam
//   this.wheels = 4
//   }
// }
//
// class Volkswagen extends Car {
//   constructor(modelParam, yearParam){
//     super(modelParam, yearParam)
//   }
// }
//
// let myVolkswagen = new Volkswagen("Beetle", 1990)
// console.log(myVolkswagen)

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
//
// Story: As a programmer, I can turn the lights in all my cars on and off.
//
// class Car {
//   constructor(modelParam, yearParam) {
//   this.model = modelParam
//   this.year = yearParam
//   this.wheels = 4
//   this.lights = false
//   }
//   lightsOn() {
//     this.lights = "on"
//   }
//
//   lightsOff() {
//     this.lights = "off"
//   }
// }
//
// class Volkswagen extends Car {
//   constructor(modelParam, yearParam){
//     super(modelParam, yearParam)
//   }
// }
//
// let myVolkswagen = new Volkswagen("Beetle", 1990)
// myVolkswagen.lightsOff()
// console.log(myVolkswagen)

//
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// class Car {
//   constructor(modelParam, yearParam) {
//   this.model = modelParam
//   this.year = yearParam
//   this.wheels = 4
//   this.lights = "off"
//   this.signal = "off"
//   }
//   lightsOn() {
//     this.lights = "on"
//   }
//
//   lightsOff() {
//     this.lights = "off"
//   }
//   signalOn() {
//     this.signal = "on"
//   }
//   signalOff() {
//     this.signal = "off"
//   }
// }
//
// class Volkswagen extends Car {
//   constructor(modelParam, yearParam){
//     super(modelParam, yearParam)
//   }
// }
//
// let myVolkswagen = new Volkswagen("Beetle", 1990)
// myVolkswagen.lightsOff()
// myVolkswagen.signalOn()
// console.log(myVolkswagen)

//
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// class Car {
//   constructor(modelParam, yearParam) {
//   this.model = modelParam
//   this.year = yearParam
//   this.wheels = 4
//   this.lights = false
//   this.speed = 0
//   }
//   lightsOn() {
//     this.lights = "on"
//   }
//
//   lightsOff() {
//     this.lights = "off"
//   }
//   accelerate() {
//     this.speed = this.speed + 10
//   }
// }
//
// class Volkswagen extends Car {
//   constructor(modelParam, yearParam){
//     super(modelParam, yearParam)
//   }
// }
//
// let myVolkswagen = new Volkswagen("Beetle", 1990)
// myVolkswagen.lightsOff()
// myVolkswagen.accelerate()
// console.log(myVolkswagen)


// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// class Car {
//   constructor(modelParam, yearParam) {
//   this.model = modelParam
//   this.year = yearParam
//   this.wheels = 4
//   this.lights = false
//   this.speed = 0
//   }
//   lightsOn() {
//     this.lights = "on"
//   }
//
//   lightsOff() {
//     this.lights = "off"
//   }
// }

// class Tesla extends Car {
//   constructor(modelParam, yearParam){
//     super(modelParam, yearParam)
//   }
//   accelerate() {
//     this.speed = this.speed + 10
//   }
//   break() {
//     this.speed = this.speed - 7
//   }
// }
//
// let myTesla = new Tesla("X", 1990)
// myTesla.lightsOff()
// myTesla.accelerate()
// myTesla.break()
// console.log(myTesla)

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// class Toyota extends Car {
//   constructor(modelParam, yearParam){
//     super(modelParam, yearParam)
//   }
//   accelerate() {
//     this.speed = this.speed + 5
//   }
//   break() {
//     this.speed = this.speed - 2
//   }
// }
//
// let myToyota = new Toyota("Highlander", 2017)
// myToyota.lightsOff()
// myToyota.accelerate()
// myToyota.break()
// console.log(myToyota)


// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.


// class Volkswagen extends Car {
//   constructor(modelParam, yearParam){
//     super(modelParam, yearParam)
//   }
//   accelerate() {
//     this.speed = this.speed + 7
//   }
//   break() {
//     this.speed = this.speed - 5
//   }
// }
//
// let myVolkswagen = new Volkswagen("Beetle", 1990)
// myVolkswagen.lightsOff()
// myVolkswagen.accelerate()
// myVolkswagen.break()
// console.log(myVolkswagen)

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
//
// The method can be created in the parent class and accessed by all child classes

class Car {
  constructor(modelParam, yearParam) {
  this.model = modelParam
  this.year = yearParam
  this.wheels = 4
  this.lights = "off"
  this.speed = 0
  this.signal = "off"
  }
  lightsOn() {
    this.lights = "on"
  }
  lightsOff() {
    this.lights = "off"
  }
  signalOn() {
    this.signal = "on"
  }
  signalOff() {
    this.signal = "off"
  }
  carInfo() {
    return `This is a ${this.year} ${this.model}, which has the lights ${this.lights}.`
  }
}

class Volkswagen extends Car {
  constructor(modelParam, yearParam){
    super(modelParam, yearParam)
  }
  accelerate() {
    this.speed = this.speed + 7
  }
  break() {
    this.speed = this.speed - 5
  }
}

let myVolkswagen = new Volkswagen("Beetle", 1990)
myVolkswagen.lightsOff()
myVolkswagen.accelerate()
myVolkswagen.break()
console.log(myVolkswagen.carInfo())
