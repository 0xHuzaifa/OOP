**Inheritance in Object-Oriented Programming (OOP):**

Inheritance is a key concept in Object-Oriented Programming (OOP) that enables a new class (subclass or derived class) to inherit attributes and methods from an existing class (superclass or base class). It promotes code reuse and facilitates the creation of hierarchical relationships among classes, allowing subclasses to extend or specialize the functionality of their superclass.

**Key Aspects of Inheritance:**

1. **Code Reusability:** Inheritance allows subclasses to reuse attributes and methods defined in their superclass, reducing code duplication and promoting a more modular and maintainable codebase.

2. **Hierarchy:** Inheritance facilitates the creation of hierarchical relationships among classes, where subclasses inherit properties and behaviors from their superclass and can further extend or modify them.

3. **Polymorphism:** Inheritance enables polymorphic behavior, where objects of different subclasses can be treated uniformly through their common superclass interface, promoting flexibility and extensibility in code design.

**Example:**

Consider a class hierarchy representing different types of vehicles:

```typescript
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

    constructor(brand: string, model: string, numWheels: number) {
        super(brand, model);
        this.numWheels = numWheels;
    }

    honk(): void {
        console.log("Beep beep!");
    }
}

class Motorcycle extends Vehicle {
    private hasSideCar: boolean;

    constructor(brand: string, model: string, hasSideCar: boolean) {
        super(brand, model);
        this.hasSideCar = hasSideCar;
    }

    wheelie(): void {
        console.log("Performing a wheelie!");
    }
}

// Creating objects of Car and Motorcycle
let myCar = new Car("Toyota", "Camry", 4);
let myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", false);

myCar.drive(); // Output: Driving Toyota Camry
myCar.honk();  // Output: Beep beep!

myMotorcycle.drive(); // Output: Driving Harley-Davidson Sportster
myMotorcycle.wheelie(); // Output: Performing a wheelie!
```

In this example, the `Vehicle` class serves as the superclass, defining common attributes and methods shared by all vehicles. The `Car` and `Motorcycle` classes are subclasses that inherit from `Vehicle` and extend its functionality by adding specific attributes and methods relevant to cars and motorcycles, respectively.

#OOP #Inheritance #Typescript #Programming #ObjectOrientedProgramming #SoftwareDevelopment
