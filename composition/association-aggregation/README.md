# Exercice
Exercice Orienté Objet

## Réaliser une composition entre Author et Book.

- Author doit avoir
  - une propriété public Name et une propriété Email,
  - vous devez créer un constructeur pour remplir ces propriétés.

- Book doit avoir
 - une propriété public authors: Author[], Price et Name.
 - Un constructeur pour set Name et Price. (Et initialiser la liste authors = [])

 - A vous de trouver comment réaliser une composition entre ces deux classes.
 - Pour tester votre code voici ce qui doit fonctionner :
 
  ```typescript
  let author1 = new Author("J.K. Rowling", "jkr@author.com");
  let author2 = new Author("Philip Pullman", "pp@author.com");
  let book = new Book("Harry Potter", 19.99);
  book.addAuthor(author1);
  book.addAuthor(author2);
  console.log("Book Name: " + book.Name);
  console.log("Book Price: " + book.Price);
  
  for (let author of book.authors) {
    console.log("Author Name: " + author.Name);
    console.log("Author Email: " + author.Email);
  }
  ```
  