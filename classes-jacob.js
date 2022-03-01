/** Challenge #1 **/

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

/* Write the code that makes a black coffee. Then write the code that outputs the coffee's profile. */

let blackCoffee = new Coffee('black', 0, 0)
console.log(blackCoffee.coffeeProfile())


/* Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile. */
let newCoffee = new Coffee('basic', 1, 2)
console.log(newCoffee.coffeeProfile())

//Challenge #2 Latte Maker
/* Write a Latte class that takes a flavor, a milk type and a number of shots.
Write a method for your Latte class that outputs the latte's profile.*/


class Latte {
    constructor(flavor, milkType, shot) {
        this.flavor = flavor
        this.milkType = milkType
        this.shot = shot
    }

    latteProfile() {
        return `A ${this.flavor} flavored latte with ${this.milkType} milk and ${this.shots()}`
    }

    shots(){
        if(this.shot === 1){
            return `${this.shot} shot`
        } else {
            return `${this.shot} shots`
        }
    }
}

/* Write the code that makes a regular, single shot latte. Then, log the latte's profile.*/

var regularLatte = new Latte('regular','whole',1)
console.log(regularLatte.latteProfile())

/* Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.*/

var hazelnutLatte = new Latte('hazelnut', 'almond milk', 2)
console.log(hazelnutLatte.latteProfile())