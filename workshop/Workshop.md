# Objectifs du workshop
Ce workshop a pour objectif de vous faire pratiquer l'ensemble des designs patterns sur un sujet précis. Le but n'est pas d'avoir un produit fini, mais un prototype préparé en vue de la réalisation d'une application complète par la suite (que vous ne ferrez pas).
Vous aurez à disposition, la liste des patterns associé à un sujet, l'UML proposé pour chaque pattern, ainsi que quelques explications / précisions quand nécessaire.
Vous devez :
- Implémenter chaque pattern en TypeScript
- Réaliser le code client pour tester le bon fonctionnement du pattern

Aucune interface utilisateur n'est requise pour cet exercice, uniquement les objets métiers.

# Périmètre du workshop
Vous devez réaliser **(les prototypes de patterns uniquement !)** un système sous forme de site Web de vente en ligne de véhicules comme, par exemple, des automobiles ou des scooters. Ce système autorise différentes opérations comme l’affichage d’un catalogue, la prise de commande, la gestion et le suivi de clientèle,...

Le site permet d’afficher un catalogue de véhicules proposés à la vente, d’effectuer des recherches au sein de ce catalogue, de passer commande d’un véhicule, de choisir des options pour celui-ci avec un système de chariot virtuel. Les options incompatibles entre elles doivent également être gérées (par exemple "sièges sportifs" et "sièges en cuir" sont des options incompatibles). Il est également possible de revenir à un état précédent du chariot.

Le système doit gérer les commandes. Il doit être capable de calculer les taxes en fonction du pays de livraison du véhicule. Il doit également gérer les commandes payées au comptant et celles assorties d’une demande de crédit. Il prend en compte les demandes de crédit. Le système gère les états de la commande : en cours, validée et livrée.

Lors de la commande d’un véhicule, le système construit la liasse des documents nécessaires comme la demande d’immatriculation, le certificat de cession et le bon de commande. Ces documents sont disponibles au format PDF ou au format HTML.

Le système permet également de solder les véhicules difficiles à vendre, à savoir ceux qui sont dans le stock depuis longtemps.

Il permet également une gestion des clients, en particulier des sociétés possédant des filiales afin de leur proposer, par exemple, l’achat d’une flotte de véhicules.

Lors de la visualisation du catalogue, il est possible de visualiser des animations associées à un véhicule. Le catalogue peut être présenté avec un ou trois véhicules par ligne.

La recherche dans le catalogue peut s’effectuer à l’aide de mots clés et d’opérateurs logiques (et, ou).

Il est possible d’accéder au système via une interface Web classique ou au travers d’un système de Web services.

# Liste des patterns et domaine d'application
| Domaine        | Patterns      |
| ------|-----|
|Construire les objets du domaine (Automobile à essence, automobile à électricité, etc.).|Abstract Factory
|Construire les liasses de documents nécessaires en cas d’acquisition d’un véhicule.|Builder, Prototype
|Créer les commandes.|Factory Method
|Créer la liasse vierge de documents.|Singleton
|Gérer des documents PDF.|Adapter
|Implanter des formulaires en HTML ou à l’aide d’une applet.|Bridge
|Représenter les sociétés clientes.|Composite
|Afficher les véhicules du catalogue.|Decorator, Observer, Strategy
|Fournir l’interface en service Web du site.|Facade
|Gérer les options d’un véhicule commandé.|Flyweight, Memento
|Gérer l’affichage d’animations pour chaque véhicule du catalogue.|Proxy
|Gérer la description d’un véhicule.|Chain of responsibility
|Solder les véhicules restés en stock pendant une longue durée.|Command
|Rechercher dans la base de véhicules à l’aide d’une requête écrite sous la forme d’une expression logique.|Interpreter
|Retrouver séquentiellement les véhicules du catalogue.|Iterator
|Gérer le formulaire d’une demande de crédit.|Mediator
|Gérer les états d’une commande.|State
|Calculer le montant d’une commande.|Template Method
|Envoyer des propositions commerciales par e-mail à certaines sociétés clientes.|Visitor

## Liste des patterns - UML et précisions sur le domaine d'application
### Abstract Factory
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/AbstractFactory.png)

Dans ce contexte le pattern Abstract Factory vous permet de gérer la multitude de produits du Catalogue (ici Scooter et Automobile) afin de pouvoir en fabriquer des Electrique ou a Essence. Si nous avions à rajouter un produit, ou une mixité entre Essence et Electricité, sans Abstract Factory nous aurions beaucoup de modification à effectuer, ici il suffirait d'implémenter la fabrique correspondante et / ou les produits concrets.

### Builder
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Builder.png)

Lors de l’achat d’un véhicule, un vendeur crée une liasse de documents comprenant notamment le bon de commande et la demande d’immatriculation du client. Il peut construire ces documents au format HTML ou au format PDF selon le choix du client.

### Factory Method
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/FactoryMethod.png)

Nous nous intéressons aux clients et aux commandes. La classe Client introduit la méthode créeCommande qui doit créer la commande. Certains clients commandent un véhicule en payant au comptant et d’autres clients utilisent un crédit. En fonction de la nature du client, la méthode créeCommande doit créer une instance de la classe CommandeComptant ou une instance de la classe CommandeCrédit. Pour réaliser cette alternative, la méthode créeCommande est abstraite. Les deux types de clients sont distingués en introduisant deux sous-classes concrètes de la classe abstraite Client

### Decorator
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Decorator.png)

Nous souhaitons ici mettre en place une décoration afin de pouvoir enrichir l'affichage des véhicules. Pour ajouter les infos techniques ou pour ajouter le logo à l'affichage par exemple. En fontion de la décoration appliquée, l'affichage sera différent.

### Prototype
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Prototype.png)

Lors de l’achat d’un véhicule, un client doit recevoir une liasse définie par un nombre précis de documents tels que le certificat de cession, la demande d’immatriculation ou encore le bon de commande. D’autres types de documents peuvent être ajoutés ou retirés à cette liasse en fonction des besoins de gestion ou des changements de réglementation. Nous introduisons une classe Liasse dont les instances sont des liasses composées des différents documents nécessaires. Pour chaque type de document, nous introduisons une classe correspondante.

Puis nous créons un modèle de liasse qui est une instance particulière de la classe Liasse et qui contient les différents documents nécessaires, documents qui restent vierges. Nous appelons cette liasse, la liasse vierge. Ainsi nous définissons au niveau des instances le contenu précis de la liasse que doit recevoir un client et non au niveau des classes. L’ajout ou la suppression d’un document dans la liasse vierge n’impose pas de modification dans sa classe.

Une fois cette liasse vierge introduite, nous procédons par clonage pour créer les nouvelles liasses. Chaque nouvelle liasse est créée en dupliquant tous les documents de la liasse vierge.

Cette technique basée sur des objets disposant de la capacité de clonage utilise le pattern Prototype, les documents constituant les différents prototypes.

La classe Document est une classe abstraite connue de la classe Liasse. Ses sous-classes correspondent aux différents types de documents. Elles possèdent la méthode duplique qui permet de cloner une instance existante pour en obtenir une nouvelle.

### Singleton
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Singleton.png)

Le système de liasse de documents destinés au client lors de l’achat d’un véhicule (comme le certificat de cession, la demande d’immatriculation et le bon de commande) utilise la classe LiasseVierge qui ne possède qu’une seule instance.

### Adapter
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Adapter.png)

Vous devez créer la classe DocumentPdf implantant l’interface Document et possédant une association avec ComposantPdf. L’implantation des trois méthodes de l’interface Document consiste à déléguer correctement les appels au composant PDF.

### Bridge
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Bridge.png)

Pour gérer la plaque d'immatriculation et par exemple effectuer des contrôles de saisie par pays, la solution du pattern Bridge consiste à séparer les aspects de représentation de ceux d’implantation et à créer deux hiérarchies de classes. Les instances de la classe FormulaireImmatriculation détiennent le lien implantation vers une instance répondant à l’interface FormulaireImpl.

L’implantation des méthodes de FormulaireImmatriculation est basée sur l’utilisation des méthodes décrites dans FormulaireImpl.

Quant à la classe FormulaireImmatriculation, elle est abstraite et il existe une sous-classe concrète pour chaque pays.

### Composite
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Composite.png)

Le pattern Composite doit être utilisé ici pour unifier l’interface des deux types de sociétés en utilisant la composition récursive. Une société peut posséder des filiales qui possèdent elles-mêmes d’autres filiales. Il s’agit d’une composition en arbre où les sociétés mères sont placées au-dessus de leurs filiales.

### Facade
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Facade.png)

Nous voulons offrir la possibilité d’accéder au système de vente de véhicule en tant que service Web. Le système est architecturé sous la forme d’un ensemble de composants possédant leur propre interface comme :
- le composant Catalogue
- le composant GestionDocument
- le composant RepriseVéhicule.
Il est possible de donner l’accès à l’ensemble de l’interface de ces composants aux clients du service Web mais cette démarche présente deux inconvénients majeurs :
- certaines fonctionnalités ne sont pas utiles aux clients du service Web comme les fonctionnalités d’affichage du catalogue
- l’architecture interne du système répond à des exigences de modularité et d’évolution qui ne font pas partie des besoins des clients du service Web pour lesquels ces exigences engendrent une complexité inutile.

Le pattern Facade résout ce problème en proposant l’écriture d’une interface unifiée plus simple et d’un plus haut niveau d’abstraction. Une classe est chargée d’implanter cette interface unifiée en utilisant les composants du système.

### Flyweight
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Flyweight.png)

Les options d'un véhicule sont décrites par la classe OptionVéhicule qui contient plusieurs attributs comme le nom, l’explication, un logo, le prix standard, les incompatibilités avec d’autres options, avec certains modèles, etc.

Pour chaque véhicule commandé, il est possible d’associer une nouvelle instance de cette classe. Cependant un grand nombre d’options sont souvent présentes pour chaque véhicule commandé, ce qui oblige le système à gérer un grand ensemble d’objets de petite taille.

Le pattern Flyweight propose une solution à ce problème en partageant les options :
- le partage est réalisé par une fabrique à laquelle le système s’adresse pour obtenir une référence vers une option. Si cette option n’a pas été créée jusqu’à présent, la fabrique procède à sa création avant d’en renvoyer la référence
- les attributs d’une option ne contiennent que ses informations spécifiques indépendamment des véhicules commandés : ces informations constituent l’état intrinsèque des options
- les informations particulières à une option et à un véhicule sont stockées au niveau du véhicule : ces informations constituent l’état extrinsèque des options. Elles sont transmises comme paramètres lors des appels des méthodes des options.

### Proxy
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Proxy.png)

Nous souhaitons mettre en place le pattern proxy afin de retarder le démarrage d'un film associé aux véhicules sur le catalogue. Ce film se charge et se joue uniquement lors du click sur le modèle.

### Chain Of Responsibility
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/ChainOfResponsibility.png)

Lorsque le catalogue des véhicules est affiché, l’utilisateur peut demander une description de l’un des véhicules mis en vente. Si une telle description n’a pas été fournie, le système doit alors renvoyer la description associée au modèle de ce véhicule. Si à nouveau, cette description n’a pas été fournie, il convient de renvoyer la description associée à la marque du véhicule. Une description par défaut est renvoyée s’il n’y a pas non plus de description associée à la marque.

Ainsi, l’utilisateur reçoit la description la plus précise qui est disponible dans le système.

### Command
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Command.png)

Le gestionnaire peut demander au catalogue de solder les véhicules d’occasion présents dans le stock depuis une certaine durée. Pour des raisons de facilité, cette demande doit pouvoir être annulée puis, éventuellement, rétablie.

Le pattern Command résout ce problème en transformant la requête en un objet dont les attributs vont contenir les paramètres ainsi que l’ensemble des objets sur lesquels la requête a été appliquée. Dans notre exemple, il devient ainsi possible d’annuler ou de rétablir une requête de remise.

### Iterator
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Iterator.png)

(Celui-ci me semble assez compliqué, laissez le de côté pour la fin, ce sera un bonus)

L’idée est de créer une classe Itérateur dont chaque instance peut gérer un parcours dans une collection. Les instances de cette classe Itérateur sont créées par la classe de collection qui se charge de les initialiser.

Le but du pattern Iterator est de fournir une solution qui puisse être paramétrée par le type des éléments des collections. Nous introduisons donc deux classes abstraites génériques :
- Itérateur est une classe abstraite générique qui introduit les méthodes début, item et suivant
- Catalogue est également une classe abstraite générique qui introduit la méthode qui crée, initialise et retourne une instance de Itérateur.

Il est ensuite possible de créer les sous-classes concrètes de ces deux classes abstraites génériques, sous-classes qui lient notamment les paramètres de généricité aux types utilisés dans l’application.

### Interpretor
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Interpretor.png)

Mettez en place un moteur de recherche permettant de vérifier les opérateurs "et", "ou" et ce qui est en parenthèse.
Par exemple interprétez ``` (rouge ou bleu) et essence et récent ```, afin de vérifier si une entrée utilisateur répond à ces critères ou non.

### Mediator
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Mediator.png)

Les interfaces utilisateur dynamiques sont un bon exemple pour un mediator. Une modification de la valeur d’un contrôle graphique peut conduire à modifier l’aspect d’autres contrôles graphiques comme, par exemple :
- devenir visible ou masqué
- modifier le nombre de valeurs possibles (pour un menu)
- changer le format des valeurs à saisir.

La solution consiste à construire un objet central chargé de la coordination des contrôles graphiques. Lorsque la valeur d’un contrôle est modifiée, il prévient l’objet médiateur qui se charge d’invoquer les méthodes adéquates des autres contrôles graphiques afin qu’ils puissent réaliser les modifications nécessaires.

Dans notre système de vente en ligne de véhicules, un emprunt peut être demandé pour acquérir un véhicule en remplissant un formulaire en ligne. Il est possible d’emprunter seul ou avec un co-emprunteur. Ce choix se fait à l’aide d’un menu. Si le choix est d’emprunter avec un co-emprunteur, tout un ensemble de contrôles graphiques relatifs aux données du co-emprunteur doivent apparaître et être saisis.

Ce diagramme introduit les classes suivantes :
- Contrôle est une classe abstraite qui introduit les éléments communs à tous les contrôles graphiques
- PopupMenu, ZoneSaisie et Bouton sont les sous-classes concrètes de Contrôle qui implantent la méthode saisie
- Formulaire est la classe qui fait office de médiateur. Elle reçoit les notifications de changement des contrôles par invocation de la méthode contrôleModifié.

### Memento
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Memento.png)

Lors de l’achat en ligne d’un véhicule neuf, le client peut choisir des options supplémentaires qui vont être ajoutées à son chariot. Cependant, il existe des options incompatibles comme, par exemple, les sièges sportifs qui sont incompatibles avec les sièges en cuir ou les accoudoirs.

La conséquence de cette incompatibilité est que si les accoudoirs ont été choisis et qu’ensuite les sièges sportifs sont choisis, l’option des accoudoirs est retirée du chariot.

Nous désirons ensuite ajouter une option d’annulation de la dernière opération effectuée dans le chariot. Retirer la dernière option ajoutée n’est pas suffisant car il faut aussi remettre les options présentes et qui ont été retirées pour cause d’incompatibilité. Une solution consiste à mémoriser l’état du chariot avant l’ajout d’une nouvelle option.

Par la suite, nous souhaitons étendre ce mécanisme pour gérer un historique des états du chariot et pouvoir revenir à n’importe quel état. Il faut alors, dans ce cas, mémoriser tous les états successifs du chariot.

Pour préserver l’encapsulation de l’objet représentant le chariot, une solution consisterait à mémoriser ces états intermédiaires dans le chariot. Cependant cette solution aurait pour effet de complexifier inutilement cet objet.

Le pattern Memento propose une réponse à ce problème. Elle consiste à mémoriser les états du chariot dans un objet appelé mémento. Lors de l’ajout d’une nouvelle option, le chariot crée un mémento, l’initialise avec son état, retire les options incompatibles avec cette nouvelle option, procède à l’ajout de cette nouvelle option et renvoie le mémento ainsi créé. Celui-ci sera utilisé par la suite en cas d’annulation de cet ajout et de retour à l’état précédent.

Seul le chariot peut mémoriser son état dans le mémento et y restaurer un état précédent : le mémento est opaque vis-à-vis des autres objets.

### Observer
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Observer.png)

Nous voulons mettre à jour l’affichage d’un catalogue de véhicules en temps réel. Chaque fois que les informations relatives à un véhicule sont modifiées, nous voulons mettre à jour l’affichage de celles-ci. Il peut y avoir plusieurs affichages simultanés.

### State
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/State.png)

- Implémentez le pattern State de ce diagramme d'état-transition simple :
- ![](StateToImplement.png)

### Strategy
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Strategy.png)

Un "algorithme de dessin" est utilisé pour calculer la mise en page en fonction du navigateur. Il existe deux versions de cet algorithme :
- une première version qui n’affiche qu’un seul véhicule par ligne (un véhicule prend toute la largeur disponible) et qui affiche le maximum d’informations ainsi que quatre photos
- une seconde version qui affiche trois véhicules par ligne mais qui affiche moins d’informations et une seule photo.

Utilisez le pattern Stratégie pour répondre à cette problématique.

### Template Method
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/TemplateMethod.png)

La différence entre deux commandes provenant de pays différents concerne notamment le calcul de la TVA. Si en France, le taux de TVA est toujours de 19,6%, il est variable au Luxembourg (12% pour la partie des prestations, 15% pour le matériel). Le calcul de la TVA demande deux opérations de calcul distinctes en fonction du pays.
- Pour la France:
CalculeMontantTtc :
montantTva = montantHt * 0,196;
montantTtc = montantHt + montantTva;
- Pour le Luxembourg :
CalculeMontantTtc :
montantTva = (montantPrestationHt * 0,12) +
(montantMatérielHt * 0,15);
montantTtc = montantHt + montantTva;

Utilisez le pattern Template Method afin de factoriser la partie commune de ces méthodes.

### Visitor
![](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/workshop/Visitor.png)

Le pattern Visitor propose d’implanter les nouvelles fonctionnalités dans un objet séparé appelé visiteur. Chaque visiteur établit une fonctionnalité pour plusieurs classes en introduisant pour chacune de ces classes une méthode d’implantation de nom visite et dont le paramètre est typé par la classe à visiter.

Ensuite, le visiteur est transmis à la méthode accepteVisiteur de ces classes. Cette méthode appelle la méthode du visiteur correspondant à sa classe. Ainsi quel que soit le nombre de fonctionnalités à implanter dans un ensemble de classes, seule la méthode accepteVisiteur doit être écrite. Il peut être nécessaire de donner la possibilité au visiteur d’accéder à la structure interne de l’objet visité (de préférence par des accesseurs en lecture comme l’accesseur get des propriétés nom, email et adresse représenté dans le diagramme des classes par les méthodes getNow, getEmail et getAdresse).

Si les objets sont composés alors leur méthode accepteVisiteur appelle la méthode accepteVisiteur de leurs composants. C’est le cas ici pour chaque instance de la classe SociétéMère qui appelle la méthode accepteVisiteur de ses filiales.

L’interface Visiteur introduit la signature des méthodes implantant les fonctionnalités pour chaque classe à visiter. Cette interface possède deux sous-classes d’implantation, une par fonctionnalité.
