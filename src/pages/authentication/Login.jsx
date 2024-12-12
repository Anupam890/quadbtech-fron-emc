import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import leftImage from "../../assets/images/left.png";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

   
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <img src={leftImage} alt="Illustration" className="max-w-xs md:max-w-md" />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="max-w-md w-full">
          <h2 className="mt-8 text-3xl font-bold">Log in</h2>
          <p className="mt-2 text-gray-500">
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-500 text-lg font-semibold">
              Sign up
            </Link>
          </p>
          <form className="mt-6 space-y-6" onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={credentials.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <EyeOff size={20} className="text-gray-500" />
                ) : (
                  <Eye size={20} className="text-gray-500" />
                )}
              </span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="h-5 w-5 border-gray-300 rounded focus:ring-green-500" />
                <span className="ml-2">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-green-500 text-sm font-bold">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className={`w-full mt-6 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
