import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            if (response.ok) {
                alert("Login successful")
                navigate('/')
            } else {
                setError("Invalid email or password");
            }
        } catch (error) {
            setError("Something went wrong, please try again");
        }
    };

    useEffect(() => {
        setError(null);
    }, [username, password]);

    return(
        <div className="login_body">
            <div className="center">
                <h1 className="login_header">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="txt_field">
                        <input type="text" required value={username} onChange={(event) => setUsername(event.target.value)} />
                        <label>Username</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
                        <label>Password</label>
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="forgot">Forgot Password?</div>
                    <button className="login_btn" type="submit" >Login</button>
                    <div className="signup_link">
                        Not a member? <Link to="/signup" className="login_l">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
