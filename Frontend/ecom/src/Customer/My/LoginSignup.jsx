import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const LoginSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignUp = location.pathname === "/register";

  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let response;
      if (isSignUp) {
        response = await axios.post("https://your-api.com/register", formData);
      } else {
        response = await axios.post("https://your-api.com/login", formData);
      }

      console.log("Success:", response.data);
      localStorage.setItem("token", response.data.token); // Save token (if applicable)

      // Redirect after login/signup
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-5xl bg-white shadow-lg rounded-lg flex overflow-hidden">
        
        {/* Animated Image Section */}
        <motion.div
          initial={{ x: isSignUp ? "100%" : "-100%" }}
          animate={{ x: isSignUp ? "0%" : "0%" }}
          transition={{ duration: 0.5 }}
          className={`w-1/2 flex items-center justify-center p-8 transition-transform duration-500 ${
            isSignUp ? "order-2" : "order-1"
          }`}
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            alt="Illustration"
            className="w-full transition-all duration-500"
          />
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`w-1/2 p-8 transition-transform duration-500 ${
            isSignUp ? "order-1" : "order-2"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>

          {/* Display Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded mb-4"
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mb-4"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
              disabled={loading}
            >
              {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <p className="mt-4 text-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => navigate(isSignUp ? "/login" : "/register")}
              className="text-blue-600"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginSignup;
