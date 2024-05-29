# Memento
[Refactoring Guru - Memento](https://refactoring.guru/design-patterns/memento)

## Définition

Son but est de sauvegarder et de restaurer l’état d’un objet sans oublier le principe d'encapsulation.

On l'utilise en général afin de pouvoir gérer les incompatibilités associés à des changements d'états. Par ex : Gestion des incompatibilités suite au choix des options sur une voiture

## Problématique

Comment gérer les changements d'états afin de pouvoir revenir en arrière ? 

Comment revenir en arrière sur des incompatibilités entre objets / options ?

## Avantages

- Enregistrer l'état d'un objet afin de pouvoir le restituer plus tard
 
- Permet d'éviter de recalculer les incompatibilités suite à une annulation de choix
 
- Respecte le principe d'encapsulation en gardant la possibilité de revenir en arrière sur l'état d'un objet

![UML Memento](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-Memento.png)