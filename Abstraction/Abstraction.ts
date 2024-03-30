abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    private radius: number;

    constructor (radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor (width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

let circle = new Circle(5);
let rectangle = new Rectangle(5, 6);

console.log(circle.calculateArea());
console.log(rectangle.calculateArea());
