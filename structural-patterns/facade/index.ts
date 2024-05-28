// Run: bun run structural-patterns/facade/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Facade")
console.log("========================================")

// Diagramme UML

// +------------------+
// |     IAliment     |
// +------------------+
// | +ajouterPain()   |
// | +ajouterViande() |
// | +ajouterTomate() |
// | +ajouterOignon() |
// +------------------+
//         /\
//         ||
// +------------------+
// |     Burger       |
// +------------------+
// | +ajouterPain()   |
// | +ajouterViande() |
// | +ajouterTomate() |
// | +ajouterOignon() |
// +------------------+
//         /\
//         ||
// +------------------+
// |     Facade       |
// +------------------+
// | +burgerComplet() |
// | +burgerClassic() |
// | +burgerNoTomato()|
// | +burgerNoOinons()|
// +------------------+

// Code d'implémentation

interface IAliment {
    ajouterPain(): void;
    ajouterViande(): void;
    ajouterTomate(): void;
    ajouterOignon(): void;
}

class Burger implements IAliment {
    ajouterPain(): void {
        console.log("Pain ajouté");
    }
    ajouterViande(): void {
        console.log("Viande ajoutée");
    }
    ajouterTomate(): void {
        console.log("Tomate ajoutée");
    }
    ajouterOignon(): void {
        console.log("Oignon ajouté");
    }
}

class Facade {
    private burger: Burger;

    constructor() {
        this.burger = new Burger();
    }

    burgerComplet(): void {
        this.burger.ajouterPain();
        this.burger.ajouterViande();
        this.burger.ajouterTomate();
        this.burger.ajouterOignon();
    }

    burgerClassic(): void {
        this.burger.ajouterPain();
        this.burger.ajouterViande();
        this.burger.ajouterTomate();
    }

    burgerNoTomato(): void {
        this.burger.ajouterPain();
        this.burger.ajouterViande();
        this.burger.ajouterOignon();
    }

    burgerNoOinons(): void {
        this.burger.ajouterPain();
        this.burger.ajouterViande();
        this.burger.ajouterTomate();
    }
}

// Utilisation
const facade = new Facade();
facade.burgerComplet(); // Pain ajouté, Viande ajoutée, Tomate ajoutée, Oignon ajouté
facade.burgerClassic(); // Pain ajouté, Viande ajoutée, Tomate ajoutée
facade.burgerNoTomato(); // Pain ajouté, Viande ajoutée, Oignon ajouté
facade.burgerNoOinons(); // Pain ajouté, Viande ajoutée, Tomate ajoutée