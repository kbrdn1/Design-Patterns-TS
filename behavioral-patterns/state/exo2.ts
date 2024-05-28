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
  private state: IGateState | null;

  constructor(initialState: IGateState | null = null) {
    this.state = initialState;
  }

  setState(state: IGateState): void {
    this.state = state;
  }

  enter(): void {
    !this.state ? console.log("No state set.") : this.state.enter();
  }

  pay(): void {
    !this.state ? console.log("No state set.") : this.state.pay();
  }

  payFailed(): void {
    !this.state ? console.log("No state set.") : this.state.payFailed();
  }
}

class OpenGateState implements IGateState {
  private gate: Gate;

  constructor(gate: Gate) {
    this.gate = gate;
  }

  enter(): void {
    console.log("Entering through the open gate.");
    this.gate.setState(new ClosedGateState(this.gate));
  }

  pay(): void {
    console.log("Gate is already open. No need to pay.");
  }

  payFailed(): void {
    console.log("Payment failed but gate is already open.");
  }
}

class ClosedGateState implements IGateState {
  private gate: Gate;

  constructor(gate: Gate) {
    this.gate = gate;
  }

  enter(): void {
    console.log("Gate is closed. Cannot enter.");
  }

  pay(): void {
    console.log("Payment successful. Opening gate.");
    this.gate.setState(new OpenGateState(this.gate));
  }

  payFailed(): void {
    console.log("Payment failed. Gate remains closed.");
  }
}

const gate = new Gate()

gate.enter() // No state set.
gate.pay() // No state set.
gate.payFailed() // No state set.

gate.setState(new ClosedGateState(gate))

gate.enter() // Gate is closed. Cannot enter.
gate.pay() // Payment successful. Opening gate.
gate.payFailed() // Payment failed. Gate remains closed.

gate.setState(new OpenGateState(gate))

gate.enter() // Entering through the open gate.
gate.pay() // Gate is already open. No need to pay.
gate.payFailed() // Payment failed but gate is already open.
