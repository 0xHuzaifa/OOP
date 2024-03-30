class Car {
    color: string;
    model: string;
    year: number;
    isRunning: boolean;

    constructor(color: string, model: string, year: number) {
        this.color = color;
        this.model = model;
        this.year = year;
        this.isRunning = false
    }

    start(): void {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log(`Car has started`);
        } else {
            console.log(`Car is already running`);
        }
    }

    stop(): void {
        if (this.isRunning) {
            this.isRunning = false;
            console.log(`Car has stopped`);
        } else {
            console.log(`Car is already stopped`);
        }
    }

}

const myCar: Car = new Car('black', 'Mustang', 1897)

console.log(myCar.color);
console.log(myCar.model);
console.log(myCar.year);

myCar.start();
myCar.start();
myCar.stop();
myCar.stop();


