// Run: bun run creational-patterns/abstract-factory/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Abstract Factory")
console.log("========================================")

// Produits Abstraits
interface Button {
    paint(): void;
}

interface Checkbox {
    paint(): void;
}

// Produits Concrets pour Windows
class WindowsButton implements Button {
    paint(): void {
        console.log("Rendering a button in Windows style.");
    }
}

class WindowsCheckbox implements Checkbox {
    paint(): void {
        console.log("Rendering a checkbox in Windows style.");
    }
}

// Produits Concrets pour MacOS
class MacOSButton implements Button {
    paint(): void {
        console.log("Rendering a button in MacOS style.");
    }
}

class MacOSCheckbox implements Checkbox {
    paint(): void {
        console.log("Rendering a checkbox in MacOS style.");
    }
}

// Fabrique Abstraite
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Fabriques Concrètes pour Windows
class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

// Fabriques Concrètes pour MacOS
class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }
    createCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
}

// Client code
function clientCode(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.paint();
    checkbox.paint();
}

// Utiliser la fabrique Windows
console.log("Client: Testing client code with the WindowsFactory:");
clientCode(new WindowsFactory());

// Utiliser la fabrique MacOS
console.log("Client: Testing client code with the MacOSFactory:");
clientCode(new MacOSFactory());