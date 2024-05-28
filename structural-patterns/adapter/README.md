# Adapter

## Définition

Comme son nom l’indique, il a pour objectif de rendre une interface non adaptée à une autre, compatible. En rajoutant un objet intermédiaire nommé « Adapter ».

## Problématique

Les interfaces exposées ne sont pas toujours compatibles avec ce que nous avons, il nous faut donc réaliser une adaptation intermédiaire pour pouvoir coupler les deux. 

## Avantages

- Adapter une interface pour qu’elle s’imbrique dans une autre, tout simplement.
 
- Découplage fort
 
- Peut-être facilement mis en place même après coup, à moindre coût

![UML Adapter](https://raw.githubusercontent.com/kbrdn1/Design-Patterns-TS/main/assets/UML-Adapter.png)

## Exercice
Exercice (Réaliser un pattern Adapter)

Voici le code que vous devez adapter pour pouvoir permettre à votre classe cliente (ThirdPartyBillingSystem) d'afficher les employés d'une manière plus propre et ordonnée. 

```typescript
class ThirdPartyBillingSystem {
    private employeeSource: ITargetBis;

    public constructor(employeeSource: ITargetBis) {
        this.employeeSource = employeeSource;
    }

    public showEmployeeList(): void {
        const employees: string[] = this.employeeSource.getEmployeeList();
        console.log("######### Employee List ##########");
        for (const item of employees) {
            console.log(item);
        }
    }
}

interface ITargetBis {
    getEmployeeList(): string[];
}

class HRSystem {
    public getEmployees(): string[][] {
        const employees: string[][] = new Array(4);
        employees[0] = ["100", "Deepak"];
        employees[1] = ["101", "Team Leader"];
        employees[2] = ["102", "Rohit", "Developer"];
        employees[3] = ["103", "Gautam", "Developer"];
        employees[4] = ["104", "Dev", "Tester"];
        return employees;
    }
}
```

Vous devez implémenter une classe
class EmployeeAdapter : HRSystem, ITargetBis.
(Vous pouvez enlever le de ITarget, c'est l'interface utilisée) qui appelle GetEmployees afin de retourner une liste d'employé pour adapter l'affichage comme demandé.

Résultat attendu :
```bash
######### Employee List ##########
100, Deepak
101, Team Leader
102, Rohit, Developer
103, Gautam, Developer
104, Dev, Tester
``
