// Run: bun run behavioral-patterns/command/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Command")
console.log("========================================")

interface ICommand {
    execute(): void;
    unexecute(): void;
}

class VolumeReceiver {
    private volume: number = 50;

    getVolume(): number {
        return this.volume;
    }

    increaseVolume(amount: number): void {
        this.volume += amount;
        console.log(`Volume increased to ${this.volume}`);
    }

    decreaseVolume(amount: number): void {
        this.volume -= amount;
        console.log(`Volume decreased to ${this.volume}`);
    }
}

class IncreaseVolumeCommand implements ICommand {
    private receiver: VolumeReceiver;
    private amount: number;

    constructor(receiver: VolumeReceiver, amount: number) {
        this.receiver = receiver;
        this.amount = amount;
    }

    execute(): void {
        this.receiver.increaseVolume(this.amount);
    }

    unexecute(): void {
        this.receiver.decreaseVolume(this.amount);
    }
}

class DecreaseVolumeCommand implements ICommand {
    private receiver: VolumeReceiver;
    private amount: number;

    constructor(receiver: VolumeReceiver, amount: number) {
        this.receiver = receiver;
        this.amount = amount;
    }

    execute(): void {
        this.receiver.decreaseVolume(this.amount);
    }

    unexecute(): void {
        this.receiver.increaseVolume(this.amount);
    }
}

class Invoker {
    private history: ICommand[] = [];

    constructor(private increaseCommand: ICommand, private decreaseCommand: ICommand) {}

    increaseVolume(): void {
        this.increaseCommand.execute();
        this.history.push(this.increaseCommand);
    }

    decreaseVolume(): void {
        this.decreaseCommand.execute();
        this.history.push(this.decreaseCommand);
    }

    undo(): void {
        const command = this.history.pop();
        if (command) {
            command.unexecute();
        }
    }
}

const hiFiSystem = new VolumeReceiver();
const tv = new VolumeReceiver();

const hiFiIncreaseCommand = new IncreaseVolumeCommand(hiFiSystem, 10);
const hiFiDecreaseCommand = new DecreaseVolumeCommand(hiFiSystem, 10);

const tvIncreaseCommand = new IncreaseVolumeCommand(tv, 5);
const tvDecreaseCommand = new DecreaseVolumeCommand(tv, 5);

const remote = new Invoker(hiFiIncreaseCommand, hiFiDecreaseCommand);
const voice = new Invoker(tvIncreaseCommand, tvDecreaseCommand);

// Example usage:
remote.increaseVolume(); // Volume increased to 60
remote.decreaseVolume(); // Volume decreased to 50
remote.undo(); // Volume increased to 60

voice.increaseVolume(); // Volume increased to 55
voice.decreaseVolume(); // Volume decreased to 50
voice.undo(); // Volume increased to 55