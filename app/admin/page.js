import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;

export default async function Home() {
    if (!db) {
        db = await open({
          filename: "./collection.db", 
          driver: sqlite3.Database, 
        });
      }
    
    const items = await db.all("SELECT * FROM users");
    
    return <div>{JSON.stringify(items)}</div>
}