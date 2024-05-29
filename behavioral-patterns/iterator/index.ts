// Run: bun run behavioral-patterns/iterator/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Iterator")
console.log("========================================")

// Code d'implémentation

class AlphabeticalOrderIterator implements Iterator<string> {
    private collection: WordsCollection;
    private reverse: boolean;
    private position: number = 0;

    constructor(collection: WordsCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getItems().length - 1;
        }
    }

    public next(): IteratorResult<string> {
        const items = this.collection.getItems();
        if (this.reverse) {
            if (this.position >= 0) {
                return { value: items[this.position--], done: false };
            }
        } else {
            if (this.position < items.length) {
                return { value: items[this.position++], done: false };
            }
        }
        return { value: null, done: true };
    }

    public hasNext(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        } else {
            return this.position < this.collection.getItems().length;
        }
    }
}

class WordsCollection implements Iterable<string> {
    private items: string[] = [];

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getItems(): string[] {
        return this.items;
    }

    public getIterator(): AlphabeticalOrderIterator {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): AlphabeticalOrderIterator {
        return new AlphabeticalOrderIterator(this, true);
    }

    [Symbol.iterator](): Iterator<string> {
        return this.getIterator();
    }
}

// Utilisation
const collection = new WordsCollection();
collection.addItem("Apple");
collection.addItem("Banana");
collection.addItem("Cherry");

const iterator = collection.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.next().value);
}

const reverseIterator = collection.getReverseIterator();
while (reverseIterator.hasNext()) {
    console.log(reverseIterator.next().value);
}