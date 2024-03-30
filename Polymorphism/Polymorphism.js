"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Parent class representing an animal
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    // Method to make a sound
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}
// Subclass representing a Cat
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    // Override makeSound method for Cat
    makeSound() {
        console.log(`${this.name} says Meow!`);
    }
}
// Subclass representing a Dog
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    // Override makeSound method for Dog
    makeSound() {
        console.log(`${this.name} says Woof!`);
    }
}
// Subclass representing a Bird
class Bird extends Animal {
    constructor(name) {
        super(name);
    }
    // Override makeSound method for Bird
    makeSound() {
        console.log(`${this.name} says Chirp!`);
    }
}
// Function to make animals make sounds
function makeAnimalsMakeSounds(animals) {
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
