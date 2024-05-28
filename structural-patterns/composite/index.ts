// Run: bun run structural-patterns/composite/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Composite")
console.log("========================================")

// Interface commune
interface Component {
    operation(): string;
}

// Classe pour le <li> (enfant)
class ListItem implements Component {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    operation(): string {
        return `<li>${this.content}</li>`;
    }
}

// Classe pour le <ul> (parent)
class UnorderedList implements Component {
    private children: Component[] = [];

    constructor(children: Component[] = []) {
        this.children = children;
    }

    add(child: Component): void {
        this.children.push(child);
    }

    remove(child: Component): void {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    operation(): string {
        const result = this.children.map(child => child.operation()).join("");
        return `<ul>${result}</ul>`;
    }
}

// Exemple d'utilisation
const listItem1 = new ListItem("Item 1");
const listItem2 = new ListItem("Item 2");
const listItem3 = new ListItem("Item 3");

const unorderedList = new UnorderedList([listItem1, listItem2]);
unorderedList.add(listItem3);

console.log(unorderedList.operation());