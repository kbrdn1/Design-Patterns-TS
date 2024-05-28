// Run: bun run behavioral-patterns/state/exo2.ts

console.log("========================================");
console.log("Exercice 2: Patterns - State");
console.log("========================================");

interface IGateState {
  enter(): void;
  pay(): void;
  payFailed(): void;
}

class Gate {
  private state: IGateState;

  constructor(initialState: IGateState | null = null) {
    this.state = initialState ?? new ClosedGateState(this);
  }

  setState(state: IGateState): void {
    this.state = state;
  }

  enter(): void {
    this.state.enter();
  }

  pay(): void {
    this.state.pay();
  }

  payFailed(): void {
    this.state.payFailed();
  }
}

class OpenGateState implements IGateState {
  private gate: Gate;

  constructor(gate: Gate) {
    this.gate = gate;
  }

  enter(): void {
    console.log("Gate already open. Entering through the open gate.");
  }

  pay(): void {
    console.log("Gate is already open. No need to pay.");
    this.gate.setState(new OpenGateState(this.gate));
  }

  payFailed(): void {
    console.log("Payment failed");
  }
}

class ClosedGateState implements IGateState {
  private gate: Gate;

  constructor(gate: Gate) {
    this.gate = gate;
  }

  enter(): void {
    console.log("Opening gate to let you in.");
    this.gate.setState(new OpenGateState(this.gate));
  }

  pay(): void {
    console.log("You can't enter yet. Please wait for the gate to open.");
  }

  payFailed(): void {
    console.log("Payment failed.");
  }
}

const gate = new Gate()

gate.enter() // Opening gate to let you in.
gate.pay() // You can't enter yet. Please wait for the gate to open.
gate.payFailed() // Payment failed.
gate.enter() // Gate already open. Entering through the open gate.
gate.pay() // Gate is already open. No need to pay.
gate.payFailed() // Payment failed.

const gate2 = new Gate()

gate2.pay() // You can't enter yet. Please wait for the gate to open.
gate2.payFailed() // Payment failed.
gate2.enter() // Opening gate to let you in.
gate2.pay() // Gate is already open. No need to pay.
gate2.payFailed() // Payment failed.
gate2.enter() // Gate already open. Entering through the open gate.
gate2.pay() // Gate is already open. No need to pay.
gate2.payFailed() // Payment failed.
