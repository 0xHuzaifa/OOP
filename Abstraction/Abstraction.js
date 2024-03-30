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
let circle = new Circle(5);
let rectangle = new Rectangle(5, 6);
console.log(circle.calculateArea());
console.log(rectangle.calculateArea());
