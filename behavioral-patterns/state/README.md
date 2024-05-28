# State
[Refactoring Guru - State](https://refactoring.guru/design-patterns/state)

## Définition

Permet de gérer des états sur des objets tout en gardant la flexibilité d’opérer toutes les actions que voulues sur chaque état.
Sans avoir à enchainer les if (x.state === State.closed) {…}.
On change le state d’un objet et c’est ce state s’auto-gère en fonction des opérations qui sont proposées par l’interface State. 

## Problématique

La gestion d’état sur des objets est gérable avec de simples conditions, mais dans le cas où l’on a beaucoup d’état qui peuvent changer en fonction de différentes opérations, le code devient une succession de condition.
D’une part, c’est incompréhensible à premier abord (surtout sans commentaire, ça peut prendre un certain temps) et d’autre part, lorsque l’on veut ajouter un state ou une opération on se retrouve a devoir modifier tout ça au risque de tout péter.

## Avantages

- Modularité du code
 
- Simplicité pour multiplier les opérations de changement de statut (flexibilité)
 
- Découplage fort

![UML State](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-State.png)

## Exercice 1
Exercice (Réaliser un pattern State)

Réalisez le code permettant d'implémenter un pattern State répondant aux besoins précisés par le diagramme d'états transitions envoyé. 

(Débutant, confirmé, expert, indétrônable, en pouvant sauter des niveaux que ce soit positivement ou non. Excepté quand on arrive à indétrônable)

## Exercice 2

Exercice (Réaliser un pattern State)

Si nous avons assez de temps, je vais vous demander de réaliser un pattern State, l’idée ici est de gérer les statut d’une porte :

- Une interface IGateState + une classe Gate + une classe OpenGateState (IGateState) + une classe ClosedGateState
- Les méthodes à implémenter sont
  - Enter, pay, payFailed : Ces méthodes doivent modifier le statut suivant l'action réalisée sur le statut courant.