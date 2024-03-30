"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
// Function to calculate total area of shapes
function calculateTotalArea(shapes) {
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
