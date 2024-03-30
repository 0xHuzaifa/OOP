"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    color;
    model;
    year;
    isRunning;
    constructor(color, model, year) {
        this.color = color;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log(`Car has started`);
        }
        else {
            console.log(`Car is already running`);
        }
    }
    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            console.log(`Car has stopped`);
        }
        else {
            console.log(`Car is already stopped`);
        }
    }
}
const myCar = new Car('black', 'Mustang', 1897);
console.log(myCar.color);
console.log(myCar.model);
console.log(myCar.year);
myCar.start();
myCar.start();
myCar.stop();
myCar.stop();
