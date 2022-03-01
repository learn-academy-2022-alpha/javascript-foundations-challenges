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

// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes


class Car {
    constructor (genericCar, myCarYear, myLights, mySignals){
        this.model = genericCar
        this.year = myCarYear
        this.lights = "off"
        this.signals = "off"
        this.speed = 0
        this.wheels = 4
    }
  
    carInfo (){
        return `Your car is a ${this.year} ${this.model}.`
}
}
class Tesla extends Car {
    constructor (genericCar, myCarYear) {
        super (genericCar, myCarYear)
    }

accelerate () {
    this.speed = 10
}
    decelerate () {
        this.speed = 7
    }    

    }
let myTesla = new Tesla("Tesla", 2022)

console.log(myTesla.wheels)

class Toyota extends Car {
    constructor (genericCar, myCarYear) {
        super (genericCar, myCarYear)
    }

    accelerate () {
        this.speed = 5
    }
        decelerate () {
            this.speed = 2
        }  
}
let myToyota = new Toyota("AE86", 1986)
console.log(myToyota)

class Volkswagen extends Car {
    constructor (genericCar, myCarYear) {
        super (genericCar, myCarYear)
    }
    accelerate () {
        this.speed = 7
    }
        decelerate () {
            this.speed = 5
        }  
}
let myVolkswagen = new Volkswagen("Golf R", 2022)
console.log(myVolkswagen)

myTesla.accelerate()
console.log(myTesla)
console.log(myToyota.carInfo())