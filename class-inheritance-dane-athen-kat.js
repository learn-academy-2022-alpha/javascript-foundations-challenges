// Story: As a programmer, I can make a car.

class Car {
    constructor(model, year) {
        // Story: As a programmer, I can give my car a model on initialization.
        this.model = model
        this.year = year
        this.isLightsOn = false
        this.isSignalOn = false
        this.speed = 0
    }

    getNumWheels() {
        return 4
    }

    turnLightsOn() {
        this.isLightsOn = true
    }

    turnSignalOn() {
        this.isSignalOn = true
    }

    getSpeed() {
        return this.speed
    }

    carInfo() {
        return this
    }
}

// Write a variable called myCar which is an instance of the class Car

// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
const myCar = new Car("generic car", "myCar year")

// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car

class Tesla extends Car {
    constructor(model, year) {
        super(model, year)
    }

    accelerate() {
        this.speed += 10
    }

    decelerate() {
        this.speed -= 10
    }
}
// Create an object called myTesla which is a instance of class Tesla

const myTesla = new Tesla("Model S", 2020)
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car

class Toyota extends Car {
    constructor(model, year) {
        super(model, year)
    }
    
    accelerate() {
        this.speed += 5
    }

    decelerate() {
        this.speed -= 2
    }
}


// create an object called myToyota which is a instance of class Toyota
const myToyota = new Toyota("Corolla", 1990)

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car

class Volkswagen extends Car {
    constructor(model, year) {
        super(model, year)
    }

    accelerate() {
        this.speed += 7
    }

    decelerate() {
        this.speed -= 5
    }
}
// create an object called myVolkswagen which is a instance of class Volkswagen
const myVolkswagen = new Volkswagen("Buggy", 1980)
const info = myVolkswagen.carInfo()

myVolkswagen.accelerate()
// console.log()
// for (let key of Object.keys(info)) {
//     // console.log(key, value)
//     console.log(info[key])
// }

Object.keys(info).forEach(key => {
    console.log(info[key])
})

// console.log(Object.entries(info))

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