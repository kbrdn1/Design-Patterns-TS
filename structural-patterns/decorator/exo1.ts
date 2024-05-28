// Run: bun run structural-patterns/decorator/exo1.ts

console.log("========================================")
console.log("Exercice 1: Patterns - Decorator")
console.log("========================================")

abstract class Beverage {
    abstract cost(): number;
    abstract description(): string;
}

class Coffee extends Beverage {
    cost(): number {
        return 5;
    }

    description(): string {
        return "Coffee";
    }
}

class MilkChocolate extends Beverage {
    cost(): number {
        return 6;
    }

    description(): string {
        return "Milk Chocolate";
    }
}

class Tea extends Beverage {
    cost(): number {
        return 3;
    }

    description(): string {
        return "Tea";
    }
}

abstract class BeverageDecorator extends Beverage {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    abstract cost(): number;
    abstract description(): string;
}

class Sugar extends BeverageDecorator {
    cost(): number {
        return this.beverage.cost() + 0.5;
    }

    description(): string {
        return this.beverage.description() + ", Sugar";
    }
}

class Caramel extends BeverageDecorator {
    cost(): number {
        return this.beverage.cost() + 1;
    }

    description(): string {
        return this.beverage.description() + ", Caramel";
    }
}

class Chocolate extends BeverageDecorator {
    cost(): number {
        return this.beverage.cost() + 1.5;
    }

    description(): string {
        return this.beverage.description() + ", Chocolate";
    }
}

// Example usage:
let myBeverage: Beverage = new Coffee();
myBeverage = new Caramel(myBeverage);
myBeverage = new Caramel(myBeverage);
myBeverage = new Sugar(myBeverage);

console.log(myBeverage.description()); // Coffee, Caramel, Caramel, Sugar
console.log(myBeverage.cost()); // 7.5