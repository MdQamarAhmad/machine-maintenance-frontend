import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate()

  const handleChange = async  (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.email && !formData.password){
      console.log(
      "Email & Password req !"
      )
    }

    try{
      let response =  fetch("https://machine-maintenance-backend01-1.onrender.com/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
           email:formData.email,
           password:formData.password
        })
      })

    let data =  response.json()
    if(!response.ok){
      console.log("Invalid Email & Password")
      return;
    }else{
      console.log('Login Successfull')
      navigate('/dashboard');
    }


    }catch(error){
      console.log("SignIN error : ", error);
    }

    console.log("Login Data:", formData);
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
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "380px",
          padding: "40px",
          backgroundColor: "#1e293b",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          border: "1px solid #334155",
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
          Welcome Back
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px",
            fontSize: "14px",
          }}
        >
          Login to your account
        </p>

        {/* Email */}
        <div style={{ marginBottom: "20px" }}>
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
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "25px" }}>
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
            placeholder="Enter your password"
            value={formData.password}
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
            }}
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "13px",
            backgroundColor: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        {/* Signup Link */}
        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          Don't have an account?{" "}

          <Link
            to="/signup"
            style={{
              color: "#818cf8",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default login;