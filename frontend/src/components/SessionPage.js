// ProfilePage.js
import React from 'react';
import { useAuth } from './AuthContext';

const SessionPage = () => {
    const { authData } = useAuth();

    return (
        <div>
            <h2>User session Details</h2>
            <p>id: {authData.Uid}</p>
            <p>Email: {authData.email}</p>
            <p>Name: {authData.name}</p>
            <p>Role: {authData.role}</p>
            <p>Logged In: {authData.isLoggedIn ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default SessionPage;
