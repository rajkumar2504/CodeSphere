import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGoogle = async () => {
        if (!auth) {
            // DEMO MODE: Simulate login
            console.warn("⚠️ No Firebase Keys found. Using Mock Auth for Demo.");
            const mockUser = {
                uid: "demo-user-123",
                displayName: "Demo User",
                email: "demo@codesphere.com",
                photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
                getIdToken: async () => "mock-token-123"
            };
            setCurrentUser(mockUser);
            // Persist somewhat? No, simple state is fine for spa demo
            return;
        }
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const logout = () => {
        if (!auth) {
            // DEMO MODE: Clear mock user logic
            setCurrentUser(null);
            return;
        }
        return signOut(auth);
    };

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        loginWithGoogle,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
