
import React from 'react';
import Header from './Header';
import './css/gallery.css'
// import './css/companyprofile.css';
import { useAuth } from './AuthContext';
import { GETJOBS } from './services';
import CardList from './Cards/JobCard';


const JobGallery = () => {
    const { authData, userInformation } = useAuth();

    const data = GETJOBS();
    console.log("resp", data);

    return (
        <div className="container">
            <Header />
            <div className="mainview">
                <h1 id='title'> job Gallery</h1><br />
                <div className='cardview'>
                    <CardList />
                </div>
            </div>
        </div>
    )
};

export default JobGallery;