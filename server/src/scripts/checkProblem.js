const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../codesphere.db');
const db = new sqlite3.Database(dbPath);

console.log("Reading DB...");

db.all("SELECT slug, test_cases FROM problems", [], (err, rows) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Total Problems: ${rows.length}`);
        const slugs = rows.map(r => r.slug);
        console.log("Contains reverse-string?", slugs.includes('reverse-string'));

        if (slugs.includes('reverse-string')) {
            const p = rows.find(r => r.slug === 'reverse-string');
            console.log("Reverse String Test Cases:", p.test_cases);
        }
    }
});
