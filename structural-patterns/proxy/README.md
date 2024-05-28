# Proxy
[Refactoring Guru - Proxy](https://refactoring.guru/design-patterns/proxy)

## Définition

C’est sensiblement la même chose que le pattern façade, excepté que le pattern proxy exprime un but précis lors du passage par le proxy.
3 types de proxys peuvent être utilisés :

- **Remote** : Simple proxy passe plat qui opère comme une simple substitution de l’objet de départ.
- **Virtual** : Proxy qui gère l’utilisation de ressources couteuses (en temps, en machine, ou même en argent)
- **Protection** : Proxy qui ajoute une couche de sécurité lors de l’appel à votre proxy.
J’insiste sur le fait que c’est plus une vision UML différente qu’une implémentation dans le code différente.

## Problématique

Appel d’un composant externe qui nécessite un accès sécurisé, par exemple

## Avantages

- Substitution d’objet, on fait semblant d’être autre chose pour pouvoir réaliser une certaine action
 
- Opérations coûteuses déléguées (potentiellement pour l'exporter dans un service distant),
 
- Contrôle d’accès à la ressource,
 
- Découplage fort

![UML Proxy](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-Proxy.png)

## Exercice
Exercice (Réaliser un pattern Proxy)

Je vous demande de réaliser un pattern proxy, par exemple en utilisant le proxy pour valider un token d’authentification simple (un simple « toto » === « toto » suffit.

Pour ceux qui veulent développer un peu je propose de générer un fichier "Bonjour.txt" contenant 500 000 lignes d'enchaînement de mots générées aléatoirement, ou trouvez une idée d'opération couteuse à effectuer, je suis preneur de bonnes idées).