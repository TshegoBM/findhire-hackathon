import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase"; // import the auth object you created earlier
import loginImage from "../assets/Login-visual.png";
import logoImage from "../assets/FindHire-logo.jpeg";
import googleImage from "../assets/Google.png";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");

      if (rememberMe) {
        localStorage.setItem("email", email);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = () => {
    // Add logic for password reset (e.g., Firebase password reset email)
    navigate("/forgot-password"); // Or link to your password reset page
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Login successful with Google!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      {/* Left Column: Image */}
      <div className="login-image">
        <img src={loginImage} alt="Login image" />
      </div>

      {/* Right Column: Login Form */}

      <div className="login-form">
        <div className="logo-image">
          <img src={logoImage} alt="Login logo" />
        </div>
        <h2>Nice to see you again</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label className="login-label">Login</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or phone number"
              className="label-input"
              required
            />
          </div>

          <div className="password-container">
            <label className="login-label">Password</label>
            <div className="input-with-icon">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="label-input"
                required
              />
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer", marginLeft: "10px" }}
              ></i>
            </div>
          </div>
          <div className="extra-options">
            <div className="remember-me">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
              <label>Remember Me</label>

              <a onClick={handleForgotPassword} className="forgot-password">
                Forgot Password?
              </a>
            </div>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Sign in</button>
        </form>
        <div className="divider"></div>

        <button className="google-signin" onClick={handleGoogleSignIn}>
          <img src={googleImage} alt="Google logo" />
          Or sign in with Google
        </button>
        <div className="signup-container">
          <p>
            {" "}
            Don't have an account? <a href="/sign-up">Sign up now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
