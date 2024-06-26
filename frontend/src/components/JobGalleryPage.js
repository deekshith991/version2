
import React from 'react';
import Header from './Header';
import './css/companyprofile.css';
import { useAuth } from './AuthContext';



const JobGallery = () => {
    const { authData, userInformation } = useAuth();

    return (
        <div className="container">
            <Header />
            <div className="main">
                <h1> job Gallery</h1>
            </div>
        </div>
    )
};

export default JobGallery;