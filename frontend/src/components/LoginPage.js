import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const LoginPage = () => {
    const { authData, setAuthData } = useAuth();
    const [userDATA, setUserDATA] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDATA({ ...userDATA, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setAuthData({ email: userDATA.email, isLoggedIn: true });

    }

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type='email' name='email' value={userDATA.email} onChange={handleChange} />

                <label>Password: </label>
                <input type='password' name='password' value={userDATA.password} onChange={handleChange} />

                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
