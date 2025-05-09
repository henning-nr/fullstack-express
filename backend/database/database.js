const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
}
);

// Create a table if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        matricula INTEGER NOT NULL,
        sexo TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error('Error creating table ' + err.message);
        } else {
            console.log('Table Students created or already exists.');
        }
    });
});


module.exports = db;