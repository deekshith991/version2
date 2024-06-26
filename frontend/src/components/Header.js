
import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './css/header.css'; // Import CSS for styling (optional)

const Header = () => {
    const navigate = useNavigate();
    const { userInformation } = useAuth();

    const redirect = () => {
        userInformation.role === "jobSeeker" ? navigate('/profile') : navigate('/companyprofile')
    }
    return (
        <div className="header">
            <div className="logo">
                <img src="/path/to/your/logo.png" alt="Logo" className="logo-image" />
                <span className="logo-text">JOB4U</span>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search..." id="search-input" />
                <button className="search-button">Search</button>
            </div>
            <div className="actions">
                <button className="action-button">Home</button>
                <button className='action-button' onClick={redirect}>Profile</button>
                <button className="action-button">Logout</button>
            </div>
        </div>
    );
}

export default Header;
