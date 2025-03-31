"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import useAuthStore from "@/store/useAuthStore";
const Signup = () => {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user]);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);

        // Input validation
        if (!formData.name || !formData.email || !formData.phone || !formData.password) {
            setError("All fields are required");
            setLoading(false);
            return;
        }

        try {
            const { data } = await axiosInstance.post("/auth/register", formData);
            setSuccess(data.message);
            router.push("/");
            setFormData({ name: "", email: "", phone: "", password: "" });
        } catch (err) {
            setError(err.response?.data?.error || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Create an Account</h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {success && <p className="text-green-500 text-center mb-4">{success}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className={`w-full p-3 rounded text-white font-semibold transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Sign Up"}
                </button>
            </form>

            <p className="text-center text-gray-600 mt-4">
                Already have an account? <a href="/login" className="text-blue-600 font-semibold">Login</a>
            </p>
        </div>
    );
};

export default Signup;
