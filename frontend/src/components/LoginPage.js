import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext'; // Correct import from UserProvider

const LoginPage = () => {
    const { setUserInfo } = useContext(AuthContext) || {}; // Using useContext to access the context
    const [userDATA, setUserDATA] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDATA({ ...userDATA, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Assuming login function returns userInfo upon successful login
            const userInfo = await setUserInfo.email(userDATA.email)

            // Handle setting user information or redirection upon successful login
            console.log('Logged in user:', userInfo);
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error (e.g., display error message)
        }
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
