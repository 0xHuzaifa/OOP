**Abstraction in Object-Oriented Programming:**

Abstraction is a fundamental concept in Object-Oriented Programming (OOP) that involves simplifying complex systems by focusing on essential characteristics while hiding unnecessary details. It allows developers to create models that represent real-world objects or systems with relevant attributes and behaviors, abstracting away complexities to provide a clear and simplified interface for interaction.

**Key Aspects of Abstraction:**

1. **Focus on Essential Details:** Abstraction helps in identifying and focusing on the essential characteristics of an object or system while ignoring irrelevant details.

2. **Hide Implementation Details:** It hides the implementation details of a system, providing a high-level interface for interaction and allowing users to work with objects without needing to understand how they are implemented internally.

3. **Promote Reusability:** Abstraction promotes code reuse by creating generalized models that can be easily adapted and extended to solve different problems.

**Example:**

Consider a class representing different shapes:

```typescript
abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// Creating objects of Circle and Rectangle
let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);

console.log(circle.calculateArea()); // Output: ~78.54
console.log(rectangle.calculateArea()); // Output: 24
```

In this example, the `Shape` class serves as an abstraction, defining a common interface for different shapes without specifying their implementations. Concrete subclasses like `Circle` and `Rectangle` provide specific implementations of the `calculateArea()` method. Users can work with shapes using the abstract `Shape` interface without needing to know the details of how each shape calculates its area.

In the TypeScript example provided, `super()` is used within the constructors of the subclasses (`Circle` and `Rectangle`). 

In TypeScript (and in many object-oriented languages like Java and C#), when you have a class hierarchy and you extend a class (making it a subclass), you often need to call the constructor of the superclass (the class being extended) to initialize inherited properties and perform any necessary setup defined in the superclass.

In the provided example, the `Shape` class is an abstract class that serves as a template for different shapes. It has an abstract method `calculateArea()` that must be implemented by its subclasses. Since `Shape` is an abstract class and cannot be instantiated directly, it doesn't have a constructor.

However, when you create subclasses like `Circle` and `Rectangle`, you want to ensure that they properly initialize any properties inherited from the `Shape` class. Therefore, you call `super()` inside the constructor of each subclass to invoke the constructor of the superclass (`Shape`), ensuring that any necessary setup defined in `Shape` is executed.

In summary, `super()` is used to call the constructor of the superclass within the constructor of a subclass, ensuring proper initialization of inherited properties and any necessary setup defined in the superclass.

#OOP #Abstraction #Typescript #Programming #ObjectOrientedProgramming #SoftwareDevelopment #CodeSnippet

