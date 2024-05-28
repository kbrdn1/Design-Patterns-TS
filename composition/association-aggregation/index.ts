// Run: bun run composition/association-aggregation/index.ts

console.log("===========================================================")
console.log("Exercice 2: Composition - Association & Aggregation")
console.log("===========================================================")

class Author {
    constructor(public name: string, public email: string) {}
}

class BookAssociation {
    public authors: Author[] = [];

    constructor(public name: string, public price: number) {}

    addAuthor(name: string, email: string) {
        this.authors.push(new Author(name, email));
    }
}

class BookAggregation {
    constructor(public name: string, public price: number, public authors: Author[] = []) {}

    addAuthor(author: Author) {
        this.authors.push(author);
    }
}

// Association
console.log("--------------------------------------------------");
console.log("Association");
console.log("--------------------------------------------------");
const book = new BookAssociation("Name", 10);
book.addAuthor("Cédric", "cdric.brasseur@gmail.com");
book.addAuthor("Jean", "jean@gmail.com");

console.log(`Book name: ${book.name}`);
console.log(`Book price: ${book.price}`);

for (const author of book.authors) {
    console.log(`Author name: ${author.name}`);
    console.log(`Author email: ${author.email}`);
}


// Aggregation
console.log("--------------------------------------------------");
console.log("Aggregation");
console.log("--------------------------------------------------");
const author = new Author("Kylian", "kylian@flippad.com");
const book2 = new BookAggregation("Name", 10, [author]);

console.log(`Book name: ${book2.name}`); // Output: Name
console.log(`Book price: ${book2.price}`); // Output: 10

for (const author of book2.authors) {
    console.log(`Author name: ${author.name}`); // Output: Kylian
    console.log(`Author email: ${author.email}`); // Output: kylian@flippad.com
}