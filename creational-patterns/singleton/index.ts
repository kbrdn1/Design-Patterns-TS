// Run: bun run creational-patterns/singleton/index.ts

console.log("========================================")
console.log("Exercice: Patterns - Singleton")
console.log("========================================")

class Database {
  private static instance: Database;
  private username: string | undefined;
  private password: string | undefined;

  private constructor() {
    console.log("Database instance created");
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
  
  private login(): boolean {
    return this.username === "admin" && this.password === "admin"
  }

  // Placeholder for database methods
  public conect(username: string, password: string): void {
    this.username = username;
    this.password = password;
    if (!this.login()){
      console.error("Invalid credentials");
      return this.disconnect();
    }
    console.info("Connected to database");
  }
  
  public query(sql: string): void {
    if (!this.login())
      return console.error("You must connect first");
    
    console.log("Executing query: " + sql);
  }
  
  public disconnect(): void {
    this.username = undefined;
    this.password = undefined;
    console.info("Disconnected from database");
  }
}

const db = Database.getInstance();

db.conect("admin", "admin"); // Connected to database
db.query("SELECT * FROM users"); // Executing query: SELECT * FROM users
db.disconnect(); // Disconnected from database

console.log("----------------------------------------")

// Errors
db.conect("hello", "error"); // Invalid credentials
db.query("SELECT * FROM users"); // Error: You must connect first