

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check password
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Optional password length check
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      // Send only the required data to backend
      const response = await fetch(
        "https://machine-maintenance-backend01-1.onrender.com/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            password: formData.password,
          }),
        }
      );

      // Convert response to JSON
      const data = await response.json();

      // Backend returned an error
      if (!response.ok) {
        console.error("Registration failed:", data);

        alert(data.message || "Registration failed");

        return;
      }

      // Registration successful
      console.log("Signup successful:", data);

      alert("Account created successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Go to login page
      navigate("/login");

    } catch (error) {
      // Network/server connection error
      console.error("Signup request error:", error);

      alert(
        "Unable to connect to the server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "380px",
          maxWidth: "100%",
          padding: "40px",
          backgroundColor: "#1e293b",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          border: "1px solid #334155",
          boxSizing: "border-box",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "30px",
            color: "#f8fafc",
          }}
        >
          Create Account
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px",
            fontSize: "14px",
          }}
        >
          Sign up to create your account
        </p>

        {/* Name */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#cbd5e1",
              fontSize: "14px",
            }}
          >
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "13px",
              backgroundColor: "#0f172a",
              border: "1px solid #475569",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#cbd5e1",
              fontSize: "14px",
            }}
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "13px",
              backgroundColor: "#0f172a",
              border: "1px solid #475569",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#cbd5e1",
              fontSize: "14px",
            }}
          >
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            style={{
              width: "100%",
              padding: "13px",
              backgroundColor: "#0f172a",
              border: "1px solid #475569",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#cbd5e1",
              fontSize: "14px",
            }}
          >
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
            style={{
              width: "100%",
              padding: "13px",
              backgroundColor: "#0f172a",
              border: "1px solid #475569",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "13px",
            backgroundColor: loading ? "#4f46e5" : "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        {/* Login Link */}
        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          Already have an account?{" "}

          <Link
            to="/login"
            style={{
              color: "#818cf8",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;