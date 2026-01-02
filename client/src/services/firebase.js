import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

let auth;
let googleProvider;

try {
    if (!firebaseConfig.apiKey || firebaseConfig.apiKey === 'your_api_key_here') {
        console.warn("⚠️ Firebase API Key is missing. Auth features will be disabled.");
        // We can mock auth here if needed or just leave it null
    } else {
        auth = getAuth(app);
        googleProvider = new GoogleAuthProvider();
    }
} catch (error) {
    console.error("Firebase Initialization Error:", error);
}

export { auth, googleProvider };
