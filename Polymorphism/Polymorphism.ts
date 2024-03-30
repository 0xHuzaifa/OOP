// Parent class representing an animal
class Animal {
    constructor(public name: string) {}

    // Method to make a sound
    makeSound(): void {
        console.log(`${this.name} makes a sound`);
    }
}

// Subclass representing a Cat
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    // Override makeSound method for Cat
    makeSound(): void {
        console.log(`${this.name} says Meow!`);
    }
}

// Subclass representing a Dog
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    // Override makeSound method for Dog
    makeSound(): void {
        console.log(`${this.name} says Woof!`);
    }
}

// Subclass representing a Bird
class Bird extends Animal {
    constructor(name: string) {
        super(name);
    }

    // Override makeSound method for Bird
    makeSound(): void {
        console.log(`${this.name} says Chirp!`);
    }
}

// Function to make animals make sounds
function makeAnimalsMakeSounds(animals: Animal[]): void {
    animals.forEach(animal => {
        animal.makeSound();
    });
}

// Creating instances of Cat, Dog, and Bird
let cat = new Cat("Whiskers");
let dog = new Dog("Buddy");
let bird = new Bird("Tweetie");

// Making animals make sounds
makeAnimalsMakeSounds([cat, dog, bird]);
