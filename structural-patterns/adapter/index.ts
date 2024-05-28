// Run: bun run structural-patterns/adapter/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Adapter")
console.log("========================================")     

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

class EmployeeAdapter extends HRSystem implements ITargetBis {
    public getEmployeeList(): string[] {
        const employees = this.getEmployees();
        const employeeList: string[] = [];

        for (const employee of employees) {
            employeeList.push(employee.join(", "));
        }

        return employeeList;
    }
}

const hrSystem = new HRSystem();
const employeeAdapter = new EmployeeAdapter();
const billingSystem = new ThirdPartyBillingSystem(employeeAdapter);

billingSystem.showEmployeeList();