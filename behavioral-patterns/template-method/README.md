# Template Method
[Refactoring Guru - Template Method](https://refactoring.guru/design-patterns/template-method)

## Définition

Le pattern Template Method permet de reporter dans des sous-classes certaines étapes de l’une des opérations d’un objet, ces étapes étant alors décrites dans les sous-classes. 

Plus simplement, il permet de factoriser une étape commune dans une classe afin d'éviter la duplication de code.

## Problématique

Comment éviter la duplication de code induite lorsqu'une opération complexe comprend plusieurs représentations en plusieurs étapes, dont certaines sont identiques ?

## Avantages

- Regrouper les étapes / opérations communes à un traitement complexe
 
- Factoriser des éléments communs au sein des méthodes
 
- Eviter la duplication de code

![UML Template Method](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-TM.png)