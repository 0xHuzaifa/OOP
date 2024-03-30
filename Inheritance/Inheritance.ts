class Vehicle {
    protected brand: string;
    protected model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    drive(): void {
        console.log(`Driving ${this.brand} ${this.model}`);
    }
}

class Car extends Vehicle {
    private numWheels: number;

    constructor (brand: string, model: string, numWheels: number) {
        super(brand, model)
        this.numWheels = numWheels;
    }

    honk(): void {
        console.log(`Beep beep!`);
    }
}

class Motorcycle extends Vehicle {
    private hasSideCar: boolean;

    constructor(brand: string, model: string, hasSideCar: boolean) {
        super(brand, model);
        this.hasSideCar = hasSideCar;
    }

    wheelie(): void {
        console.log(`Performing a wheelie`);
    }
}

let myCar = new Car("Dodge", "SRT", 4);
let myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", false);

myCar.drive();
myCar.honk();

myMotorcycle.drive();
myMotorcycle.wheelie();