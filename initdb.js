const sqlite3 = require("sqlite3").verbose();

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "./collection.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        username TEXT,
        password TEXT,
        role TEXT,
        img TEXT,
        classes TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created users table.");

      // Clear the existing data in the products table
      db.run(`DELETE FROM users`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from users table.");

        // Insert new data into the products table
        const values1 = [
          "test",
          "test",
          "test",
          "student",
          "https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight",
          "[]"
        ];
        const values2 = [
            "admin",
            "admin",
            "admin",
            "teacher",
            "https://api.dicebear.com/7.x/adventurer/svg?seed=Cookie",
            "[]"
        ];

        const insertSql = `INSERT INTO users(name, username, password, role, img, classes) VALUES(?, ?, ?, ?, ?, ?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values2, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        //   Close the database connection after all insertions are done
        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});