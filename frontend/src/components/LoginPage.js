import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import './css/loginPage.css'

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
        <div id='view'>
            <h1>Login Page</h1>

            <div id='loginCard'>
                <form onSubmit={handleSubmit}>

                    <div className='inputBox'>
                        <label>Email: </label>
                        <input type='email' name='email' value={userDATA.email} onChange={handleChange} />
                    </div>

                    <div className='inputBox'>
                        <label>Password: </label>
                        <input type='password' name='password' value={userDATA.password} onChange={handleChange} />
                    </div>

                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
