import React from 'react';
import Header from './Header';
import './css/companyprofile.css';
import AddJOB from './AddJOBpage';

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
                    <AddJOB />
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
