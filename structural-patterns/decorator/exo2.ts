 // Run: bun run structural-patternsdecorator/exo2.ts
 
 console.log("========================================")
 console.log("Exercice 2: Patterns - Decorator")
 console.log("========================================")
 
 // Define the base Pizza interface
 interface Pizza {
     getDescription(): string;
     getCost(): number;
 }

 // Concrete Pizza classes
 class BaseCremePizza implements Pizza {
     getDescription(): string {
         return "Base Crème Pizza";
     }
     getCost(): number {
         return 5.00;
     }
 }

 class BaseTomatePizza implements Pizza {
     getDescription(): string {
         return "Base Tomate Pizza";
     }
     getCost(): number {
         return 4.50;
     }
 }

 class ChaussonPizza implements Pizza {
     getDescription(): string {
         return "Chausson Pizza";
     }
     getCost(): number {
         return 6.00;
     }
 }

 // Decorator abstract class
 abstract class PizzaDecorator implements Pizza {
     protected decoratedPizza: Pizza;

     constructor(pizza: Pizza) {
         this.decoratedPizza = pizza;
     }

     getDescription(): string {
         return this.decoratedPizza.getDescription();
     }

     getCost(): number {
         return this.decoratedPizza.getCost();
     }
 }

 // Concrete Decorators
 class Champignons extends PizzaDecorator {
     constructor(pizza: Pizza) {
         super(pizza);
     }

     getDescription(): string {
         return this.decoratedPizza.getDescription() + ", Champignons";
     }

     getCost(): number {
         return this.decoratedPizza.getCost() + 1.50;
     }
 }

 class Oeufs extends PizzaDecorator {
     constructor(pizza: Pizza) {
         super(pizza);
     }

     getDescription(): string {
         return this.decoratedPizza.getDescription() + ", Oeufs";
     }

     getCost(): number {
         return this.decoratedPizza.getCost() + 1.00;
     }
 }

 class Oignon extends PizzaDecorator {
     constructor(pizza: Pizza) {
         super(pizza);
     }

     getDescription(): string {
         return this.decoratedPizza.getDescription() + ", Oignon";
     }

     getCost(): number {
         return this.decoratedPizza.getCost() + 0.75;
     }
 }

 class Jambon extends PizzaDecorator {
     constructor(pizza: Pizza) {
         super(pizza);
     }

     getDescription(): string {
         return this.decoratedPizza.getDescription() + ", Jambon";
     }

     getCost(): number {
         return this.decoratedPizza.getCost() + 2.00;
     }
 }

 // Create a pizza with decorations
 let myPizza: Pizza = new BaseCremePizza();
 myPizza = new Champignons(myPizza);
 myPizza = new Oeufs(myPizza);
 myPizza = new Jambon(myPizza);

 console.log(myPizza.getDescription()); // Base Crème Pizza, Champignons, Oeufs, Jambon
 console.log(myPizza.getCost()); // 9.50 