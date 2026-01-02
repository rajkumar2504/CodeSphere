import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogIn } from "lucide-react";

export default function Login() {
    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await loginWithGoogle();
            navigate("/"); // Redirect to dashboard after login
        } catch (error) {
            console.error("Failed to log in", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <LogIn size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-500 mb-8">Sign in to continue your coding journey</p>

                <button
                    onClick={handleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all group"
                >
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6" alt="Google" />
                    <span className="group-hover:text-gray-900">Continue with Google</span>
                </button>
            </div>
        </div>
    );
}
