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

##Screenshots

<img width="1920" height="1044" alt="Screenshot (52)" src="https://github.com/user-attachments/assets/a9cd885e-4bdc-4852-82d0-607a864ac335" />
<img width="1920" height="1041" alt="Screenshot (53)" src="https://github.com/user-attachments/assets/51b620bb-f655-42a5-9128-c5fc84c00750" />
<img width="1920" height="1039" alt="Screenshot (54)" src="https://github.com/user-attachments/assets/71f79fe3-a7d6-42aa-88a6-e7a57f497e14" />
<img width="1920" height="1041" alt="Screenshot (55)" src="https://github.com/user-attachments/assets/692fd934-b083-4ddd-9ca7-efde123385d3" />
<img width="1920" height="1041" alt="Screenshot (56)" src="https://github.com/user-attachments/assets/b2ac37c9-8900-4afd-b111-376536b920b9" />
<img width="1920" height="1044" alt="Screenshot (57)" src="https://github.com/user-attachments/assets/d976c196-7f39-4d5f-ac94-b4b9fc72d2bf" />
<img width="1920" height="1036" alt="Screenshot (59)" src="https://github.com/user-attachments/assets/5c70be5a-9d03-4213-8e68-75760ea85c55" />
<img width="1920" height="1039" alt="Screenshot (60)" src="https://github.com/user-attachments/assets/50aed0f5-b95c-49a0-ad79-d7d3be69d64e" />
<img width="1920" height="1005" alt="Screenshot (61)" src="https://github.com/user-attachments/assets/76a8ddac-2bf0-4092-9437-5e0e1ee4473f" />

