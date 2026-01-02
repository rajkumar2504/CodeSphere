
var admin = require("firebase-admin");

// Initialize with application default credentials or service account
// For development, we skip if no credentials provided to avoid crashing
if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        console.log("🔥 Firebase Admin Initialized");
    } catch (error) {
        console.error("❌ Firebase Admin Init Error:", error.message);
    }
} else {
    console.warn("⚠️ FIREBASE_SERVICE_ACCOUNT_KEY not found in env. Auth verification will fail.");
}

module.exports = admin;
