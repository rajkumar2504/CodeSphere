# CodeSphere - Coding Education Platform

A full-stack competitive programming platform inspired by LeetCode, built with React, Node.js, and SQLite.

## 🚀 How to Run Locally

### 1. Prerequisites
- Node.js installed (v16+).
- Git installed.

### 2. Setup Configuration
**Backend Keys:**
1. Rename `server/.env.example` to `server/.env`.
2. Add your Firebase Service Account JSON (optional for public access, required for Login).
3. `DATABASE_URL` is ignored as we are using SQLite (`codesphere.db`).

**Frontend Keys:**
1. Rename `client/.env.example` to `client/.env`.
2. Add your Firebase Config keys (required for Login).

### 3. Start the Backend (Server)
The backend runs on Port 5000.
```bash
cd server
npm install
npm run db:init   # Initialize SQLite database (Run once)
npm run dev       # Start Server
```

### 4. Start the Frontend (Client)
The frontend runs on Port 5173.
```bash
cd client
npm install
npm run dev
```

### 5. Access the App
Open your browser and navigate to: **http://localhost:5173**

## 🧪 Features to Try
1. **Solve Problems**: Go to `/problems` and select **Two Sum**.
2. **Run Code**: Select **JavaScript** language and use the following solution:
   ```javascript
    class Solution {
        twoSum(nums, target) {
            const map = new Map();
            for (let i = 0; i < nums.length; i++) {
                const diff = target - nums[i];
                if (map.has(diff)) {
                    return [map.get(diff), i];
                }
                map.set(nums[i], i);
            }
        }
    }
   ```
3. **Profile**: Log in to track your submissions in `/profile`.

