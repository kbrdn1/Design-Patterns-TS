# Mediator
[Refactoring Guru - Mediator](https://refactoring.guru/design-patterns/mediator)

## Définition

Comme son nom l'indique, ce pattern a pour objectif de construire un objet intermédiaire qui gère les possibilités d'interactions entre deux objets, sans que ces deux derniers n'aient à se connaître.

## Problématique

Comment gérer l'interaction complexes entre un sous ensemble d'objets qui n'ont pas connaissance les uns des autres ?

## Avantages

- Gérer un système formé d’un ensemble d’objets basés sur une communication complexe conduisant à associer de nombreux objets entre eux
 
- Améliore la modularité du code
 
- Dissocier les objets de leurs droits d'inter-communications

![UML Mediator](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-Mediator.png)