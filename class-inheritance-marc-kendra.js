// Story: As a programmer, I can make a car.

class Car {
  constructor(model, year) {
    this.model = model
    this.year = year
    this.wheels = 4
    this.lightsOn = false
    this.turnSignalOn = false
    this.speed = 0
  }
  lightSwitch() {
    // if(this.lightsOn === false){
    //   return this.lights = true
    // } else {
    //   return this.lights = false
    // }
    this.lightsOn = !this.lightsOn
    if (!this.lightsOn){
      return "On"
    } else {
      return "Off"
    }
  }
  turnSignal() {
  this.turnSignalOn = !this.turnSignalOn
    if (!this.turnSignalOn){
      return "On"
    } else {
      return "Off"
    }
  }
  acceleration(acc) {
  this.speed += acc

  }
  brake(decelerate) {
  this.speed -= decelerate
  }
  carInfo() {
    return `
    Model: ${this.model}
    Year: ${this.year}
    Wheels: ${this.wheels}
    Lights: ${this.lightSwitch()} 
    Signal: ${this.turnSignal()} 
    Speed: ${this.speed}`
  }
}
var myCar = new Car("generic car", 2018)

class Tesla extends Car {
  constructor(model, year){
    super(model, year)
  }
}
class Toyota extends Car {
  constructor(model, year){
    super(model, year)
  }
}
class Volkswagen extends Car {
  constructor(model, year){
    super(model, year)
  }
}
var myTesla = new Tesla("Model Y", 2021)
myTesla.lightSwitch()
myTesla.turnSignal()
myTesla.acceleration(10)
myTesla.brake(7)
console.log(myTesla.carInfo());

var myToyota = new Toyota("Accord", 2018)
myToyota.lightSwitch()
myToyota.turnSignal()
myToyota.acceleration(5)
myToyota.brake(2)
console.log(myToyota.carInfo());

var myVolkswagon = new Volkswagen("Jetta", 1995)
myVolkswagon.lightSwitch()
myVolkswagon.turnSignal()
myVolkswagon.acceleration(7)
myVolkswagon.brake(5)
console.log(myVolkswagon.carInfo());
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
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
//
// Story: As a programmer, I can turn the lights in all my cars on and off.
//
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
//
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
//
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
//
// Story: As a programmer, I can slow my Tesla down by 7 per braking.
//
// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
//
// Story: As a programmer, I can slow my Toyota down by 2 per braking.
//
// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
//
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
//
// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
//
// The method can be created in the parent class and accessed by all child classes
