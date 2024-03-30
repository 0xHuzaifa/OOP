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

// Function to calculate total area of shapes
function calculateTotalArea(shapes: Shape[]): number {
    let totalArea = 0;
    shapes.forEach(shape => {
        totalArea += shape.calculateArea();
    });
    return totalArea;
}

// Creating objects of Circle and Rectangle
let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);

// Calculating total area of shapes
let totalArea = calculateTotalArea([circle, rectangle]);
console.log("Total area of shapes:", totalArea); // Output: Total area of shapes: ~109.6
