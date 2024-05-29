# Chain of Responsibility
[Refactoring Guru](https://refactoring.guru/design-patterns/chain-of-responsibility)

## Définition

Le pattern Chain of Responsibility construit une chaîne d’objets telle que si un objet de la chaîne ne peut pas répondre à une requête, il puisse la transmettre à son successeur et ainsi de suite jusqu’à ce que l’un des objets de la chaîne y réponde.

Ex : Plusieurs moyens de paiement ou plusieurs instances de serveur pour exécuter une requête

## Problématique

Comment avoir plusieurs objets répondant à un critère et permettre l'utilisation en chaîne (si possible pour l'objet) d'objets, afin d'utiliser le premier objet qui peut répondre à ce critère à un moment T ?

## Avantages

- Permettre la potentielle utilisation de moyens multiples pour répondre à une requête (suivant un ordre particulier), jusqu'à ce qu'un objet de la chaîne puisse répondre.
 
- Chaîner efficacement des demandes de traitement
 
- Le client n'a pas besoin de savoir quel maillon de la requête l'effectue

![UML Chain of Responsibility](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-COR.png)