//Challenge: #1 Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
//Challenge #15: Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
//Challenge #16: Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
class Car {
    constructor(model, year) {
        this.model = model
        this.year = year
        this.wheels = 4
        this.lights = "off"
        this.turnSignal = "off"
        this.speed = 0
    }

//Challenge #13: Story: As a programmer, I can give all my cars a lights' property. Lights start in the off position.
//Challenge #14: Story: As a programmer, I can turn the lights in all my cars on and off.
    carLights() {
        if(this.lights === "off") {
            this.lights = "on"
        } else {
            this.lights = "off"
        }
    }

    turnSignalRight() {
        this.turnSignal = "right"
    }

    turnSignalLeft() {
        this.turnSignal = "left"
    }

    carInfo() {
        return `The car is a ${this.year} ${this.model} with ${this.wheels} wheels, lights ${this.lights}, turn signal 
        ${this.turnSignal} going ${this.speed} MPH.`

    }
}

//Challenge #2: Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
//Challenge #3: Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
var myCar = new Car("generic car","2020" )
console.log("myCar:", myCar)

// Challenge #4 :Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
console.log("myCar has :", myCar.wheels, " wheels")

//Challenge #4B: Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
class Tesla extends Car {
    constructor(model, year) {
        super(model, year);
    }

//Challenge #17: Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

    accelerate() {
        this.speed += 10
    }

//Challenge #18: Story: As a programmer, I can slow my Tesla down by 7 per braking.
    brake() {
        this.speed -= 7
    }
}

// Create an object called myTesla which is an instance of class Tesla
//Challenge #5: Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing
// the model through the constructor() and super() on the child class
//Challenge #6: Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the
// constructor() and super() on the child class
var myTesla = new Tesla("Roadster", "2022")
myTesla.accelerate()
myTesla.accelerate()
myTesla.accelerate()

//Challenge #7: Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
class Toyota extends Car {
    constructor(model, year) {
        super(model, year);
    }

//Challenge #19: Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
    accelerate() {
        this.speed += 5
    }

//Challenge #20: Story: As a programmer, I can slow my Toyota down by 2 per braking.
    brake() {
        this.speed -= 2
    }
}
// create an object called myToyota which is an instance of class Toyota
//Challenge #8 : Story: As a programmer, I can give my Toyota a model on initialization.
//The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
//Challenge #9 : Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

var myToyota = new Toyota("Supra","2021")
myToyota.accelerate()
myToyota.brake()
myToyota.turnSignalRight()
myToyota.carLights()


//Challenge #10: Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
class Volkswagen extends Car {
    constructor(model, year) {
        super(model,year);
    }

//Challenge #21: Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
    accelerate() {
        this.speed += 7
    }

//Challenge #22: Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
    brake() {
        this.speed -= 5
    }
}

// create an object called myVolkswagen which is an instance of class Volkswagen
//Challenge #11: Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Challenge #12: Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

var myVolkswagen = new Volkswagen("GTI",("2023"))
myVolkswagen.accelerate()
myVolkswagen.accelerate()
myVolkswagen.accelerate()
myVolkswagen.brake()
myVolkswagen.turnSignalLeft()
myVolkswagen.carLights()

//Challenge #23: Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
console.log(myTesla.carInfo())
console.log(myToyota.carInfo())
console.log(myVolkswagen.carInfo())


