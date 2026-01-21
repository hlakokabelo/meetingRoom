import React, { useState } from "react";
import "./LoginSignup.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logginIn, setLogginIn] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        // You’ll plug your auth logic here later
    };

    const hideLogIn = (e) => {
        setLogginIn(!logginIn)
    };

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit} hidden={!logginIn} autoComplete="on">
                <h2>Welcome Back</h2>

                <input
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>

                <span className="forgot" href='#'>Forgot your password?</span>
                <span className="login-link" onClick={hideLogIn}>Login</span>
            </form>

            <form className="login-box" onSubmit={handleSubmit} hidden={logginIn}>
                <h2>Sign up</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Sign up</button>

                <span className="forgot" href='#'>Forgot your password?</span>
                <span className="login-link" onClick={hideLogIn}>Login</span>
            </form>
        </div>
    );
}


export default Login
