const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ensure the directory exists or just place it in root server
const dbPath = path.resolve(__dirname, '../../codesphere.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database ' + dbPath, err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Promisify query for easier use
const query = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        // Handle SELECT vs INSERT/UPDATE
        if (sql.trim().toUpperCase().startsWith('SELECT')) {
            db.all(sql, params, (err, rows) => {
                if (err) reject(err);
                else resolve({ rows: rows }); // Match PG format roughly
            });
        } else {
            db.run(sql, params, function (err) {
                if (err) reject(err);
                else resolve({ rows: [this], rowCount: this.changes }); // Return 'this' to access lastID, changes
            });
        }
    });
};

module.exports = {
    db,
    query
};
