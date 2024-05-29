# Flyweight
[Refactoring Guru - Flyweight](https://refactoring.guru/design-patterns/flyweight)

## Définition

Ce pattern a pour objectif de partager de façon efficace un ensemble de petits objets.

Souvent utilisé pour ajouter des comportements dynamiques à un objet englobant.

(Ex : Une voiture et toutes les options sélectionnées)

## Problématique

Comment gérer efficacement des associations entre de nombreux petits objets dynamique et un objet parent ?

Comment s'assurer que l'option ajoutée fait déjà partie de la liste des options déjà crées ?

## Avantages

- Permet de gérer une multitude de petits objets que l'on va associer à un objet parent
 
- Génération dynamique d'objets et ces objets connaissent uniquement leurs états
 
- L'objet parent peut contenir une multitude de sous objet et il connaît donc le statut de tous les sous objets

![UML Flyweight](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-Flyweight.png)