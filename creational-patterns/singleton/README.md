# Singleton

## Définition
Le pattern singleton est le plus simple des patterns, il permet de s’assurer qu’un objet est instancier qu’une et une seule fois dans toute votre application.

Ce sera toujours la MÊME instance de l’objet quelque soit depuis quel endroit l’objet est appelé. 

## Problématique

On instancie un objet quelque part, on y fait des opérations dessus, puis on souhaite à nouveau réutiliser cet objet à un autre endroit.

Pour que les opérations soient gardées en mémoire, on ne peut pas le faire, car on devra réinstancier la classe puis réeffectuer les opérations dessus. (Ou alors rajouter des dépendances inutiles)

## Avantages

S’assurer qu’un objet est instancier qu’une seule fois et y avoir accès facilement depuis n’importe où dans votre application. 

## Désavantages

Certains estiment que le pattern singleton est un mauvais pattern (à ne pas confondre avec anti-pattern). Pour deux raisons, à ma connaissance :

  1. Le pattern singleton est utilisable uniquement en statique, les débats sont nombreux avec tout ce qui tourne autour du mot clé « static ». Je vous laisserai vous renseigner et vous faire votre propre opinion, mais sachez que pour ma part, je l’utilise très fréquemment.

  2. D’après certains développeurs, le fait de dire qu’on est certain que l’on veut une seule instance de son objet à tout jamais dans son application n’est pas en lien avec le fait de faire de son application une application évolutive à toute épreuve. Pour eux, afin que ça reste évolutif, on ne peut pas se limiter à une seule instanciation. Habituellement, l'autre possibilité est d'utiliser une Factory. Je comprends le point de vue, mais je n’y adhère pas. J’utilise fréquemment le singleton pour instancier ma base de données par exemple. Dans 99,99% des cas, je sais à l’avance que je n’aurai qu’une instance de base de données et ceci n’évoluera pas au fil du temps.
  
  ## Exercice
  
  Réalisez un pattern Singleton sur un objet de base de données (Pas besoin d'implémenter les méthodes, juste les éléments nécessaires au pattern, static, getInstance, etc...)