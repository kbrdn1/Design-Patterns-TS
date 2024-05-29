# Builder
[Refactoring Guru - Builder](https://refactoring.guru/design-patterns/builder)

## Définition

L'objectif de ce pattern est de mettre en place une abstraction de construction d'objets complexes.
 
Afin qu'un client puisse créer ces objets sans avoir à se soucier de la complexité de création.


## Problématique
Comment gérer la construction d'objets complexes sans connaitre leur implémentation ? 

Comment simplifier l'utilisation de cotre code si ces objets complexes ont plusieurs implémentations et représentations ?

## Avantages
- Simplifier l'instanciation d'objets complexes à un client
 
- Proposer plusieurs implémentations et représentations d'un objets complexes
 
- Cacher la complexité de création d'objets complexe

![UML Builder](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-Builder.png)