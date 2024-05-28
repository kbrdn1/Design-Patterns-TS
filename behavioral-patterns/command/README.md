# Command 
[Refactoring Guru - Command](https://refactoring.guru/design-patterns/command)

## Définition
Le pattern command a pour objectif d’encapsuler une requête pour la rendre accessible depuis n’importe quel récepteur et la permettre d’être envoyée depuis n’importe quel émetteur.
L’idée est d’également de s’ajouter la possibilité de « undo » les commandes facilement. (Si en utilisation avec le pattern composite, on peut même effectuer des macro commandes qui exécute plusieurs petites commandes, sans en rendre plus compliqué le undo).

## Problématique
Comment proposer un service d’exécution de requêtes à de multiples clients / sujets ?

Comment s’assurer que l’on nous demande pas d’exécuter quelque chose que l’on ne sait pas traiter ?

De manière générale, comment gérer la commande ? et l'inverser ?

## Avantages
- Modularité
 
- Découplage du code et exposition de contrat à respecter pour utiliser le service
 
- Permet de réaliser les opérations inverses aisément
 
- Permet également de réaliser une succession d’opérations complexes (si utilisé avec le pattern composite, que l’on verra plus tard)

## Exercice
Exercice (Réaliser un pattern Command)

Reprenez le pattern Command pour l’appliquer à ce sujet : Gestion du son, pour l’augmenter et le baisser. L’idée va être d’avoir une ICommand qui va pouvoir execute, unexecute une action.
Cette action est définie dans une classe Receiver.
L’Invoker va lui contenir les Command, ainsi que deux méthodes:

- Monter le son,
- Baisser le son,
 - (Pour ceux qui veulent coder un peu, faites en sortes de pouvoir gérer un up / down du volume valorisé par un entier. Le unexecute doit pouvoir remettre le son de base à la bonne valeur)
 
Faites deux Invoker(Remote, Voice)  différents et deux Receiver différents (HiFiSystem, TV)