const fs = require('fs');
const path = require('path');
const { db } = require('../config/db');

const initDb = () => {
    console.log('🔄 Initializing SQLite database...');

    try {
        const schemaPath = path.join(__dirname, '../db/schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        // Split by semicolon to run statements one strictly after another
        const statements = schema.split(';').filter(stmt => stmt.trim() !== '');

        db.serialize(() => {
            statements.forEach((stmt, index) => {
                if (stmt.trim()) {
                    db.run(stmt, (err) => {
                        if (err) {
                            console.error(`❌ Error executing statement #${index + 1}:`, err.message);
                            console.error('Statement:', stmt);
                        }
                    });
                }
            });
        });

        db.close((err) => {
            if (err) {
                console.error('❌ Error closing database:', err.message);
            } else {
                console.log('✅ Database initialized successfully! (codesphere.db created)');
            }
        });

    } catch (err) {
        console.error('❌ Critical Error reading schema:', err);
    }
};

initDb();
