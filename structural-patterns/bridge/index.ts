// Run: bun run structural-patterns/bridge/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Bridge")
console.log("========================================")

// Define the Key interface
interface Key {
  getKeyType(): string;
}

// Concrete implementations of Key
class HouseKey implements Key {
  getKeyType(): string {
    return "HouseKey";
  }
}

class CarKey implements Key {
  getKeyType(): string {
    return "CarKey";
  }
}

// Abstract Door class
abstract class Door {
  protected key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  abstract open(): void;
  abstract close(): void;
}

// Concrete implementations of Door
class HouseDoor extends Door {
  open(): void {
    console.log(`Opening house door with ${this.key.getKeyType()}`);
  }

  close(): void {
    console.log(`Closing house door with ${this.key.getKeyType()}`);
  }
}

class CarDoor extends Door {
  open(): void {
    console.log(`Opening car door with ${this.key.getKeyType()}`);
  }

  close(): void {
    // No operation for closing car door
  }
}

class GarageDoor extends Door {
  open(): void {
    // No operation for opening garage door
  }

  close(): void {
    console.log(`Closing garage door with ${this.key.getKeyType()}`);
  }
}

// Example usage
const houseKey = new HouseKey();
const carKey = new CarKey();

const houseDoor = new HouseDoor(houseKey);
const carDoor = new CarDoor(carKey);
const garageDoor = new GarageDoor(carKey);

houseDoor.open(); // Opening house door with HouseKey
houseDoor.close(); // Closing house door with HouseKey

carDoor.open(); // Opening car door with CarKey
carDoor.close(); // No operation for closing car door

garageDoor.open(); // No operation for opening garage door
garageDoor.close(); // Closing garage door with CarKey