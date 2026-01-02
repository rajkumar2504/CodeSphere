-- USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY, -- UUID stored as text
    firebase_uid TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    full_name TEXT,
    role TEXT DEFAULT 'USER' CHECK (role IN ('USER', 'ADMIN')),
    profile_picture TEXT,
    skills TEXT DEFAULT '{}', -- JSON stored as TEXT
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- PROBLEMS TABLE
CREATE TABLE IF NOT EXISTS problems (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    difficulty TEXT CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
    category TEXT,
    company_tags TEXT, -- JSON Array stored as TEXT
    sample_input TEXT,
    sample_output TEXT,
    constraints TEXT, -- JSON Array stored as TEXT
    starter_code TEXT NOT NULL, -- JSON stored as TEXT
    test_cases TEXT, -- JSON stored as TEXT
    solution TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- SUBMISSIONS TABLE
CREATE TABLE IF NOT EXISTS submissions (
    id TEXT PRIMARY KEY, -- UUID stored as text
    user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
    problem_id INTEGER REFERENCES problems(id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    language TEXT NOT NULL,
    status TEXT NOT NULL,
    runtime_ms INTEGER,
    memory_kb INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_users_firebase_uid ON users(firebase_uid);
CREATE INDEX IF NOT EXISTS idx_problems_slug ON problems(slug);
CREATE INDEX IF NOT EXISTS idx_submissions_user_id ON submissions(user_id);
