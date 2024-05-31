// Run: bun run creational-patterns/factory/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Factory")
console.log("========================================")

interface ICarFactory {
  createCar(type?: string): ICar;
}

interface ICar {}

class Renault implements ICar {
    constructor() {
        console.log("Renault created");
    }
}

class Audi implements ICar {
    constructor() {
        console.log("Audi created");
    }
}

class Mercedes implements ICar {
    constructor() {
        console.log("Mercedes created");
    }
}

class RegularFactory implements ICarFactory {
    createCar(type: string): ICar {
        switch (type) {
            case "Renault":
                return new Renault();
            case "Audi":
                return new Audi();
            case "Mercedes":
                return new Mercedes();
            default:
                throw new Error("Unknown car type");
        }
    }
}

class RandomFactory implements ICarFactory {
    private carTypes = ["Renault", "Audi", "Mercedes"];

    createCar(): ICar {
        const randomIndex = Math.floor(Math.random() * this.carTypes.length);
        const type = this.carTypes[randomIndex];
        switch (type) {
            case "Renault":
                return new Renault();
            case "Audi":
                return new Audi();
            case "Mercedes":
                return new Mercedes();
            default:
                throw new Error("Unknown car type");
        }
    }
}

// Optionnel: FibonacciFactory
class FibonacciFactory implements ICarFactory {
    private sequence = [1, 1];
    private carTypes = ["Renault", "Audi", "Mercedes"];
    private index = 0;
    private count = 0;

    private nextFibonacci(): number {
        const nextValue = this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2];
        this.sequence.push(nextValue);
        return nextValue;
    }

    createCar(): ICar {
        if (this.count === 0) {
            this.count = this.nextFibonacci();
            this.index = (this.index + 1) % this.carTypes.length;
        }
        this.count--;

        switch (this.carTypes[this.index]) {
            case "Renault":
                return new Renault();
            case "Audi":
                return new Audi();
            case "Mercedes":
                return new Mercedes();
            default:
                throw new Error("Unknown car type");
        }
    }
}

// Example usage:
const regularFactory = new RegularFactory();
regularFactory.createCar("Renault"); // Renault created
regularFactory.createCar("Audi"); // Audi created

const randomFactory = new RandomFactory();
randomFactory.createCar();
randomFactory.createCar();

const fibonacciFactory = new FibonacciFactory();
fibonacciFactory.createCar();
fibonacciFactory.createCar();
fibonacciFactory.createCar();
fibonacciFactory.createCar();