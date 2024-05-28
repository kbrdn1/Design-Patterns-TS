# Decorator

## Définition
Permet d’ajouter dynamiquement des propriétés à un objet.

En pouvant empiler/décorer avec autant d’objets décorable que l’on souhaite.

L’objet décoré et le ou les objets décorants s’utilisent de la même façon, excepté que la plupart du temps, les objets décorants ne peuvent pas exister sans objet à décorer. 

## Problématique

Duplication de code et multiplication des classes pour gérer toutes les possibilités (inutiles).

## Avantages

- Simple à mettre en place

- Evite la multiplication des classes

- Permet d’ajouter des caractéristiques multiples sans limite (excepté celles définies par l’interface) à un objet de base.

- Le fait d’envelopper permet de facilement exécuter des opérations qui sont à effectuer sur chaque enveloppe pour en avoir un résultat global (prix d’une boisson par exemple)

![UML Decorator](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-Decorator.png)

> Attention, ça ne permet pas de connaître l'ordre de décoration !!!

## Exercice 1

- Adaptez le diagramme vu ensemble en utilisant la problématique suivante :

- On a une boisson de plusieurs type : café, chocolat au lait, thé, …

- Chaque boisson peut avoir plusieurs décorations : sucre, caramel, chocolat,…

- L'objectif est de calculer le prix à la compilation en fonction de la décoration

- Réalisez le code en C# permettant de mettre ceci en œuvre

- Décorez un café avec deux fois du caramel et une fois du sucre, par exemple.

## Exercice 2

- Adaptez le diagramme vu ensemble en utilisant la problématique suivante :

- On a une pizza de deux trois types possibles : base crème, base tomate, chausson

- Chaque pizza peut avoir plusieurs décorations : champignons, oeufs, oignon, jambon,... (à vous de mettre ce que vous voulez sur votre pizza)

- L'objectif est de calculer le prix à la compilation en fonction de la décoration

- Réalisez le code en C# permettant de mettre ceci en œuvre

- Décorez une pizza afin de réaliser votre pizza favorite 