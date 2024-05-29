// Run: bun run workshop/abstract-factory/index.ts

console.log("========================================");
console.log("Workshop: Patterns - Abstract Factory");
console.log("========================================");

abstract class EngineFactory {
  abstract createCar(): ICar;
  abstract createScooter(): IScooter;
}

class GasEngineFactory extends EngineFactory {
  createCar(): ICar {
    return new GasCar();
  }

  createScooter(): IScooter {
    return new GasScooter();
  }
}

class ElectricEngineFactory extends EngineFactory {
  createCar(): ICar {
    return new ElectricCar();
  }

  createScooter(): IScooter {
    return new ElectricScooter();
  }
}

interface ICar {
  start(): void;
}

class GasCar implements ICar {
  start(): void {
    console.log("Gas car started: Vroom Vroom");
  }
}

class ElectricCar implements ICar {
  start(): void {
    console.log("Electric car started: Whirr Whirr");
  }
}

interface IScooter {
  start(): void;
}

class GasScooter implements IScooter {
  start(): void {
    console.log("Gas scooter started: Vroom Vroom");
  }
}

class ElectricScooter implements IScooter {
  start(): void {
    console.log("Electric scooter started: Whirr Whirr");
  }
}

class Catalog {
  private engineList: EngineFactory[] = [];

  addEngine(engine: EngineFactory) {
    this.engineList.push(engine);
  }

  getEngineList(): EngineFactory[] {
    console.log("Engine List: ", this.engineList);
    return this.engineList;
  }

  removeEngine(engine: EngineFactory) {
    this.engineList = this.engineList.filter((e) => e !== engine);
  }
}

const catalog = new Catalog();
catalog.addEngine(new GasEngineFactory());
catalog.addEngine(new ElectricEngineFactory());

const engines = catalog.getEngineList();
engines.forEach((engine) => {
  const car = engine.createCar();
  car.start();
  const scooter = engine.createScooter();
  scooter.start();
});