import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1020] via-[#12172A] to-[#24124D] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-2xl bg-[#111827]/80 backdrop-blur-xl border border-gray-700 rounded-[32px] shadow-2xl p-12">

        {/* Logo */}
        <div className="flex justify-center items-center gap-4 mb-10">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            D
          </div>

          <h1 className="text-5xl font-bold text-white">
            DevPilot <span className="text-blue-500">AI</span>
          </h1>

        </div>

        {/* Heading */}

        <h2 className="text-6xl font-bold text-center text-white">
          Create Account
        </h2>

        <p className="text-center text-gray-400 text-xl mt-4 mb-12">
          Join DevPilot AI today
        </p>

        {/* Full Name */}

        <label className="block text-white text-lg font-medium mb-3">
          Full Name
        </label>

        <div className="flex items-center h-16 bg-[#0F172A] border border-gray-700 rounded-2xl px-5 mb-7">

          <User size={22} className="text-gray-400" />

          <input
            type="text"
            placeholder="Enter your full name"
            className="ml-4 flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-lg"
          />

        </div>

        {/* Email */}

        <label className="block text-white text-lg font-medium mb-3">
          Email
        </label>

        <div className="flex items-center h-16 bg-[#0F172A] border border-gray-700 rounded-2xl px-5 mb-7">

          <Mail size={22} className="text-gray-400" />

          <input
            type="email"
            placeholder="Enter your email"
            className="ml-4 flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-lg"
          />

        </div>

        {/* Password */}

        <label className="block text-white text-lg font-medium mb-3">
          Password
        </label>

        <div className="flex items-center h-16 bg-[#0F172A] border border-gray-700 rounded-2xl px-5 mb-7">

          <Lock size={22} className="text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            className="ml-4 flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-lg"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-white transition"
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>

        </div>

        {/* Confirm Password */}

        <label className="block text-white text-lg font-medium mb-3">
          Confirm Password
        </label>

        <div className="flex items-center h-16 bg-[#0F172A] border border-gray-700 rounded-2xl px-5 mb-7">

          <Lock size={22} className="text-gray-400" />

          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            className="ml-4 flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-lg"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="text-gray-400 hover:text-white transition"
          >
            {showConfirmPassword ? (
              <EyeOff size={22} />
            ) : (
              <Eye size={22} />
            )}
          </button>

        </div>

        {/* Terms */}

        <div className="flex items-center gap-3 mt-2 mb-8">

          <input
            type="checkbox"
            className="w-5 h-5 accent-blue-600 cursor-pointer"
          />

          <span className="text-gray-300 text-lg">
            I agree to the Terms & Conditions
          </span>

        </div>

        {/* Button */}

        <button className="w-full h-16 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-500 to-fuchsia-600 text-white text-2xl font-bold hover:scale-[1.02] transition duration-300 shadow-lg mt-2">
          Create Account
        </button>

        {/* Login */}

        <p className="text-center text-gray-400 text-lg mt-10">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;