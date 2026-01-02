const { xquery } = require('../config/db');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../codesphere.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error(err);
});

db.all("SELECT slug, test_cases FROM problems WHERE slug = 'two-sum'", [], (err, rows) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Rows:", rows);
        if (rows.length > 0) {
            console.log("Test Cases Type:", typeof rows[0].test_cases);
            console.log("Test Cases Value:", rows[0].test_cases);
        }
    }
});
