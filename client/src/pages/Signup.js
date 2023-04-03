import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    year_born: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:3000/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Redirect to login page
        navigate('/login')
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="signup_body">
      <div className="container">
        <h1 className="signup_header">Sign-up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label>Username</label>
          </div>
          <div className="form-field">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="form-field">
            <input
              type="number"
              name="year_born"
              value={formData.year_born}
              onChange={handleChange}
              required
            />
            <label>Year Of Birth</label>
          </div>
          <div className="form-field">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <button className="signup_btn" type="submit">
            Create Account
          </button>
          <div className="login_link">
            Already have Account?{" "}
            <Link className="signup_l" to="/login">
              Login
            </Link>
          </div>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default Signup;
