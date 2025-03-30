"use client";
import { useState } from "react";
import useAuthStore from "@/store/useAuthStore";

const Login = () => {
    const { login } = useAuthStore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await login({ email, password });
            router.push("/");
        } catch (err) {
            setError("Invalid email or password.");
        }

        setLoading(false);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 text-black py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 text-black py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                            }`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?
                    <a href="/register" className="text-blue-500 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
