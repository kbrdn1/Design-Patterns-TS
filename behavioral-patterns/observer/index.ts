// Run: bun run behavioral-patterns/observer/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Observer")
console.log("========================================")

// Subject interface
interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

// Observer interface
interface Observer {
    update(temperature: number): void;
}

// Concrete Subject
class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number = 0;

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemperature(temp: number): void {
        console.log(`WeatherStation: new temperature measurement: ${temp}`);
        this.temperature = temp;
        this.notifyObservers();
    }
}

// Concrete Observer
class TemperatureDisplay implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        this.subject.registerObserver(this);
    }

    update(temperature: number): void {
        console.log(`TemperatureDisplay: I need to update my display to ${temperature} degrees.`);
    }
}

// Another Concrete Observer
class Fan implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        this.subject.registerObserver(this);
    }

    update(temperature: number): void {
        if (temperature > 25) {
            console.log('Fan: It\'s hot here, turning myself on...');
        } else {
            console.log('Fan: It\'s nice and cool, turning myself off...');
        }
    }
}

// Usage
const weatherStation = new WeatherStation();

const tempDisplay = new TemperatureDisplay(weatherStation);
const fan = new Fan(weatherStation);

weatherStation.setTemperature(20); // Output: TemperatureDisplay: I need to update my display to 20 degrees.
weatherStation.setTemperature(30); // Output: TemperatureDisplay: I need to update my display to 30 degrees. Fan: It's hot here, turning myself on...
