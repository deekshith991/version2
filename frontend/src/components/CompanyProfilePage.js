import React from 'react';
import Header from './Header'; // Import the Header component
import './css/companyprofile.css'; // Import the CSS file for styling

const CompanyProfile = () => {
    return (
        <div className="container">
            <Header />
            <div className="main">
                <div className="leftHalf">
                    <h2>Profile Data</h2>
                    {/* Add your profile data content here */}
                </div>
                <div className="rightHalf">
                    <h2>Add Job</h2>
                    {/* Add your add job form or content here */}
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
