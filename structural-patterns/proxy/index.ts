// Run: bun run structural-patterns/proxy/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Proxy")
console.log("========================================")

// Define the interface for the service
interface Service {
  request(): void;
}

// Implement the actual service
class RealService implements Service {
  request(): void {
    console.log("RealService: Handling request.");
  }
}

// Implement the proxy
class ProxyService implements Service {
  private realService: RealService;
  private token: string;

  constructor(realService: RealService, token: string) {
    this.realService = realService;
    this.token = token;
  }

  request(): void {
    if (this.authenticate(this.token)) {
      this.realService.request();
    } else {
      console.log("ProxyService: Authentication failed.");
    }
  }

  private authenticate(token: string): boolean {
    return token === "toto";
  }
}

// Client code
const token = "toto"; // Change this to test authentication
const realService = new RealService();
const proxyService = new ProxyService(realService, token);

proxyService.request();

// For generating a file with 500,000 lines of random words
import { writeFileSync } from "fs";

function generateRandomWords(numWords: number): string {
  const words = ["hello", "world", "foo", "bar", "baz", "qux", "quux"];
  let result = "";
  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    result += words[randomIndex] + " ";
  }
  return result;
}

const numLines = 500000;
let fileContent = "";
for (let i = 0; i < numLines; i++) {
  fileContent += generateRandomWords(10) + "\n"; // 10 random words per line
}

writeFileSync("./structural-patterns/proxy/Bonjour.txt", fileContent);
console.log("File 'Bonjour.txt' generated with 500,000 lines of random words.");