# Observer

## Définition

Définir une dépendance entre un objet observé et un ou plusieurs objets observants.

L’objectif étant de pouvoir notifier les objets observants lorsqu’un changement de statut est opéré sur l’objet observé.

## Problématique

On a parfois besoin de connaître le changement de statut d’un autre objet. Il est possible d’interroger l’objet en continue pour connaître son statut et le mettre à jour si nécessaire.
Ceci est très gourmand s’il y’a plusieurs abonnés et surtout si on interroge toutes les secondes, alors que le statut change de manière aléatoire ?

Ceci n’est pas efficace. 

## Avantages

- Eviter les opérations de PULL massives et simplement effectuer un push / pull lorsque c’est nécessaire.
 
- Plus concrètement, améliorer la logique métier
 
- Diminuer le coûts de l’observation 

- Supprimer la question de l’intervalle d’interrogation

![UML Observer](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-Observer.png)

## Exercice
Exercice (Réaliser un pattern Observer)

Reprenez le pattern Observer pour observer la modification d'une température et notifier des objets observants ce changement de température.

Chaque modification de température affiche (dans la console) la nouvelle température pour tous les objets observants.
Pensez bien à avoir plusieurs observants.