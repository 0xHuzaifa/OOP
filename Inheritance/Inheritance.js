"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    brand;
    model;
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    drive() {
        console.log(`Driving ${this.brand} ${this.model}`);
    }
}
class Car extends Vehicle {
    numWheels;
    constructor(brand, model, numWheels) {
        super(brand, model);
        this.numWheels = numWheels;
    }
    honk() {
        console.log(`Beep beep!`);
    }
}
class Motorcycle extends Vehicle {
    hasSideCar;
    constructor(brand, model, hasSideCar) {
        super(brand, model);
        this.hasSideCar = hasSideCar;
    }
    wheelie() {
        console.log(`Performing a wheelie`);
    }
}
let myCar = new Car("Dodge", "SRT", 4);
let myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", false);
myCar.drive();
myCar.honk();
myMotorcycle.drive();
myMotorcycle.wheelie();
