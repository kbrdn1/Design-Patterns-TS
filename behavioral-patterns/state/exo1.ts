// Run: bun run behavioral-patterns/state/exo1.ts

console.log("========================================")
console.log("Exercice 1: Patterns - State")
console.log("========================================")

// Define the State interface
interface State {
    promote(): void;
    demote(): void;
}

// Define the Context class
class Developer {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    setState(state: State): void {
        this.state = state;
    }

    promote(): void {
        this.state.promote();
    }

    demote(): void {
        this.state.demote();
    }
}

// Define the different states
class Beginner implements State {
    private developer: Developer;

    constructor(developer: Developer) {
        this.developer = developer;
    }

    promote(): void {
        console.log("Promoted to Confirmed");
        this.developer.setState(new Confirmed(this.developer));
    }

    demote(): void {
        console.log("Already at the lowest level");
    }
}

class Confirmed implements State {
    private developer: Developer;

    constructor(developer: Developer) {
        this.developer = developer;
    }

    promote(): void {
        console.log("Promoted to Expert");
        this.developer.setState(new Expert(this.developer));
    }

    demote(): void {
        console.log("Demoted to Beginner");
        this.developer.setState(new Beginner(this.developer));
    }
}

class Expert implements State {
    private developer: Developer;

    constructor(developer: Developer) {
        this.developer = developer;
    }

    promote(): void {
        console.log("Promoted to Indétrônable");
        this.developer.setState(new Indetronable(this.developer));
    }

    demote(): void {
        console.log("Demoted to Confirmed");
        this.developer.setState(new Confirmed(this.developer));
    }
}

class Indetronable implements State {
    private developer: Developer;

    constructor(developer: Developer) {
        this.developer = developer;
    }

    promote(): void {
        console.log("Already at the highest level");
    }

    demote(): void {
        console.log("Demoted to Expert");
        this.developer.setState(new Expert(this.developer));
    }
}

// Usage example
const beginner = new Beginner(null as unknown as Developer);
const developer = new Developer(beginner);
developer.setState(new Beginner(developer));
developer.promote();  // Promoted to Confirmed
developer.promote();  // Promoted to Expert
developer.promote();  // Promoted to Indétrônable
developer.demote();   // Demoted to Expert
developer.demote();   // Demoted to Confirmed
developer.demote();   // Demoted to Beginner
developer.demote();   // Already at the lowest level