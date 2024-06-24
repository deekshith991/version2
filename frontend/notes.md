

``` js
// AuthContext.js file creating
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        email: '',
        name: '',
        role: '',
        isLoggedIn: false
    });

    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);


import React, { useState } from 'react';
import { useAuth } from './AuthContext';


// storing
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

        setAuthData({ email: userDATA.email });

    }



// ProfilePage.js acessing
import React from 'react';
import { useAuth } from './AuthContext';

const ProfilePage = () => {
    const { authData } = useAuth();

    return (
        <div>
            <h2>User Profile</h2>
            <p>Email: {authData.email}</p>
            <p>Name: {authData.name}</p>
            <p>Role: {authData.role}</p>
            <p>Logged In: {authData.isLoggedIn ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default ProfilePage;


```