import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1020] via-[#12172A] to-[#24124D] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-xl bg-[#111827]/80 backdrop-blur-xl border border-gray-700 rounded-3xl shadow-2xl p-10">

        {/* Logo */}
        <div className="flex justify-center items-center gap-4 mb-8">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            D
          </div>

          <h1 className="text-5xl font-bold text-white">
            DevPilot <span className="text-blue-500">AI</span>
          </h1>

        </div>

        {/* Heading */}

        <h2 className="text-5xl font-bold text-center text-white">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-400 text-xl mt-3 mb-10">
          Login to your DevPilot AI account
        </p>

        {/* Email */}

        <label className="block text-white font-medium mb-2">
          Email
        </label>

        <div className="flex items-center h-14 bg-[#0F172A] border border-gray-700 rounded-xl px-4 mb-6">

          <Mail
            size={20}
            className="text-gray-400"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="ml-4 flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
          />

        </div>

        {/* Password */}

        <label className="block text-white font-medium mb-2">
          Password
        </label>

        <div className="flex items-center h-14 bg-[#0F172A] border border-gray-700 rounded-xl px-4">

          <Lock
            size={20}
            className="text-gray-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="ml-4 flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-white transition"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>

        {/* Forgot */}

        <div className="flex justify-end mt-4">

          <button className="text-blue-500 hover:underline">
            Forgot Password?
          </button>

        </div>

        {/* Login */}

        <button className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-fuchsia-600 text-white font-bold text-xl mt-8 hover:scale-[1.02] transition duration-300 shadow-lg">
          Login →
        </button>

        {/* Divider */}

        <div className="flex items-center my-8">

          <div className="flex-1 h-px bg-gray-700"></div>

          <span className="mx-4 text-gray-400">
            or
          </span>

          <div className="flex-1 h-px bg-gray-700"></div>

        </div>

        {/* Google */}

        <button className="w-full h-14 rounded-xl border border-gray-700 text-white hover:bg-gray-800 transition font-medium">
          Continue with Google
        </button>

        {/* Register */}

        <p className="text-center text-gray-400 mt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;