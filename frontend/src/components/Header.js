
import React from 'react';
import './css/header.css'; // Import CSS for styling (optional)

const Header = () => {
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
                <button className="action-button">Logout</button>
            </div>
        </div>
    );
}

export default Header;
