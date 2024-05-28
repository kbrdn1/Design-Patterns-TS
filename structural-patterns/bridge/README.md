# Bridge
[Refactoring Guru - Bridge](https://refactoring.guru/design-patterns/bridge)

## Définition

C’est simple, c’est un pont.
Un pont entre une classe abstraite et une interface permettant d’anticiper le problème de multiplication de classe vu dans le pattern adapter.
L’idée pour différencier les deux, concrètement, c’est que l’adapter corrige un problème de compatibilité alors que le pont l’anticipe pour ne jamais avoir le problème.

## Problématique
Deux interfaces ne sont pas forcément compatibles si elles n’ont pas été pensées au départ pour l’être.

La gestion d’un produit cartésien de nos classes nécessite la multiplication des classes, pour un 3x3, le gain est de 3 classes, mais pour du 20x20, le gain est élevé. 

## Avantages
- Anticiper les problèmes de compatibilité
 
- Gestion de produit cartésien entre nos classes (composition multiples de combinaisons) sans avoir à multiplier les classes.
 
- Modularité et extensibilité du code accrue
 
- On respecte le contrat de l’interface et de la classe abstraite et on est bon, on fait les combinaisons que l’on souhaite.

![UML Bridge](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-Bridge.png)

![UML Bridge](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-Bridge-expliquation.png)

## Exercice

Réaliser un pattern bridge, l’idée est de faire un bridge pour pouvoir lier une clé de voiture avec une clé de maison, ou une clé de garage par exemple :

- Une classe abstraite Door + une interface Key.
- Des implémentations concrètes de Key (HouseKey, CarKey)
- Des implémentations concrètes de Door (HouseDoor, CarDoor, GarageDoor)
- Les méthodes pour ouvrir et fermer
- Dans un cas, vous devez logger l'ouverture et la fermeture (HouseDoor), d'autres juste l'ouverture (CarDoor) et le dernier juste la fermeture (GarageDoor).