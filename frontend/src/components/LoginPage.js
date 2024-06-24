import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './css/loginPage.css'

const LoginPage = () => {
    const { authData, setAuthData } = useAuth();
    const [userDATA, setUserDATA] = React.useState({
        email: '',
        password: ''
    }) || {};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDATA({ ...userDATA, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setAuthData({ email: userDATA.email, isLoggedIn: true });

    }

    return (
        <div className='LOGINPAGE'>
            <div className="container">
                <h1>Find the most
                    <br />Exciting Jobs
                </h1>
                <div className="d-flex flex-row">
                    <div className="login-box">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Username</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" value={userDATA.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={userDATA.password} onChange={handleChange} />
                            </div>
                            <button className="btn btn-primary btn-block" id="login-btn" type="submit">Login</button>
                        </form>
                        {/* <p className="text-center mt-3" id="register-link">Don't have an account? <Link >Register</Link></p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
