// Run: bun run behavioral-patterns/strategy/index.ts

console.log("========================================")
console.log("Exercice 2: Patterns - Strategy")
console.log("========================================")

interface StrategieInterface {
  reagir(personne: PersonneInterface): void;
}

class Enerve implements StrategieInterface {
  reagir(personne: PersonneInterface): void {
    console.log(personne.donnerPhrase().toUpperCase() + "!!!");
  }
}

class Geek implements StrategieInterface {
  reagir(personne: PersonneInterface): void {
    console.log(personne.donnerPhrase().replace(/o/g, '0'));
  }
}

class Heureux implements StrategieInterface {
  reagir(personne: PersonneInterface): void {
    console.log(personne.donnerPhrase() + " :)");
  }
}

interface PersonneInterface {
  donnerPhrase(): string;
}

class Personne implements PersonneInterface {
  donnerPhrase(): string {
    return 'Bonjour';
  }
}

class Contexte {
  private strategie: StrategieInterface;

  constructor(strategie: StrategieInterface) {
    this.strategie = strategie;
  }

  exprimeReaction(personne: PersonneInterface): void {
    this.strategie.reagir(personne);
  }
  
  setStrategie(strategie: StrategieInterface): void {
    this.strategie = strategie;
  }
}

// Example usage:
const personne = new Personne();
const contexte1 = new Contexte(new Enerve());
const contexte2 = new Contexte(new Geek());
const contexte3 = new Contexte(new Heureux());

console.log("--------------------------------------------------");
console.log("Strategy");
console.log("--------------------------------------------------");

contexte1.exprimeReaction(personne); // Output: BONJOUR!!!
contexte2.exprimeReaction(personne); // Output: B0nj0ur
contexte3.exprimeReaction(personne); // Output: Bonjour :)

contexte1.setStrategie(new Geek());
contexte1.exprimeReaction(personne); // Output: B0NJ0UR