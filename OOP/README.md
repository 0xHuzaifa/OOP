Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of "objects." These objects are instances of classes, which are like blueprints that define the properties (attributes) and behaviors (methods) that the objects can have. 

Imagine you have a class called "Car." This class would define what a car is made of (attributes like color, model, year) and what it can do (methods like start, stop, accelerate). Now, when you create a specific car object from this class, let's say a red Ferrari from 2022, you're creating an instance of the "Car" class that has its own unique set of attributes and behaviors.

Here's an example:

```python
class Car {
    color: string;
    model: string;
    year: number;
    isRunning: boolean;

    constructor(color: string, model: string, year: number) {
        this.color = color;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }

    start(): void {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log("The car has started.");
        } else {
            console.log("The car is already running.");
        }
    }

    stop(): void {
        if (this.isRunning) {
            this.isRunning = false;
            console.log("The car has stopped.");
        } else {
            console.log("The car is already stopped.");
        }
    }
}

// Creating an object (instance) of the Car class
let myCar = new Car("red", "Ferrari", 2022);

// Accessing object's attributes
console.log(myCar.color);  // Output: red
console.log(myCar.model);  // Output: Ferrari
console.log(myCar.year);   // Output: 2022

// Using object's methods
myCar.start();  // Output: The car has started.
myCar.stop();   // Output: The car has stopped.
```

In TypeScript, you define the class members (attributes and methods) and their types. The constructor initializes the object's attributes. Then, you create an object using the new keyword, similar to how it's done in JavaScript. Finally, you can access the object's attributes and call its methods as shown in the example.