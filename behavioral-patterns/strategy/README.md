# Strategy

## Définition

L'idée principale est de pouvoir mettre en place une certaine stratégie ou ce que l’on va régulièrement appeler un comportement afin de pouvoir en changer dynamiquement au runtime.
Sans pattern stratégie, on serait obligé de multiplier les classes en produit cartésien pour pouvoir avoir autant de combinaisons de comportements que nécessaire. (Horrible)

## Problématique

L’héritage est puissant mais il ne permet de partager du code que de manière verticale, c’est-à-dire à ses enfants.

Par contre, si les enfants veulent partager du code entre eux, aucun moyen de le faire à part en dupliquant le code (Horrible).

## Avantages

- Meilleure lisibilité du code. (Pas de duplication, pas de gros pavés de méthodes dans une seule classe)

- S’assurer que chaque élément à sa propre responsabilité (découplage fort)

- Et surtout avoir des algorithmes interchangeables au runtime sans avoir à multiplier les classes.

## Exercice
Exercice (Réaliser un pattern Strategy)

Reprenez le pattern Stratégie pour l’appliquer à ce sujet :

Une interface StrategieInterface ayant pour contrat function reagir(PersonneInterface $personne);

Trois classes (Enerve, Geek, Heureux) chacune implémentant StrategieInterface et redéfinissant donc la méthode réagir:

- Enervé écrit en majuscule et ajoute des !!! à la fin.
- Geek remplace les o par des 0
- Heureux ajoute un :) à la fin
 

Une interface PersonneInteface ayant pour contrat function donnerPhrase();

Une classe Personne qui implémente PersonneInterface et donc redéfini donnerPhrase :

```typescript
return 'Bonjour';
```
 

Une classe Contexte qui a une stratégie en propriété.

- Un constructeur pour setter la stratégie
- une méthode exprimeReaction qui appel la méthode de la stratégie passée dans le constructeur