import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here, e.g., authenticate with an API
        if (username === '' || password === '') {
            setError('Please enter both username and password.');
        } else {
            // Authenticate user
            console.log('Logging in:', { username, password });
            // Reset input fields
            setUsername('');
            setPassword('');
            setError('');
        }
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        // Add registration logic here
        console.log('Registering:', { username, password });
        // Reset input fields
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <h3>New here? Register below:</h3>
            <form onSubmit={handleRegistration}>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Login;