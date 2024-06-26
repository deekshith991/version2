import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './css/loginPage.css'
import { LOGIN } from './services';

const LoginPage = () => {

    const navigate = useNavigate();
    const { authData, setAuthData } = useAuth();
    const [userDATA, setUserDATA] = React.useState({
        email: '',
        password: ''
    }) || {};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDATA({ ...userDATA, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('logging in');
        const data = {
            email: userDATA.email,
            password: userDATA.password
        }
        const status = await LOGIN(data);
        // setting the base values in local storage a small trick to set up sessionStorage
        setAuthData({ role: status.role, email: status.email, isLoggedIn: true, name: (status.name || status.companyName), Uid: status._id });
        { authData.role === "jobSeeker" ? navigate('/jobgallery') : navigate('/companyprofile') }

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
                        <p className="text-center mt-3" id="register-link">Don't have an account? <Link to='/register' >Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
