
import React from 'react';
import Header from './Header';
import './css/companyprofile.css';
import { useAuth } from './AuthContext';



const UserProfile = () => {
    const { authData, userInformation } = useAuth();

    return (
        <div className="container">
            <Header />
            <div className="main">
                <div className="leftHalf">
                    <h2>Profile Data</h2>
                    <div id='profileblock'>
                        <h4>Id : {userInformation._id}</h4>
                        <h3>Name: {userInformation.name}</h3>
                        <h3>Qualification : {userInformation.qualification} </h3>
                        <h3>Email : {userInformation.email}</h3>
                        <h3>Applied to :( {userInformation.appliedTo.length}) </h3>
                    </div>
                </div>
                <div className="rightHalf">
                    <h1>hello</h1>
                </div>
            </div>
        </div>
    )
};

export default UserProfile;