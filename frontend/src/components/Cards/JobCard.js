

import React, { useEffect, useState } from 'react';
import '../css/card.css'
import axios from 'axios';
const api_URL = 'http://localhost:3333';

const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get(`${api_URL}/api/jobs`)
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="card-list">
            {cards.map(card => (
                <div key={card._id} id="card">
                    <h3>Company : <span id='nameofplace'>{card.company_Name}</span></h3>
                    <p>position : {card.position}</p>
                    <p>Type : {card.workType}</p>
                    <p>Location: {card.workLocation}</p>
                    <p>salary (per Annum): {card.salary}</p>
                    {/* Add other fields as needed */}
                </div>
            ))}
        </div>
    );
};

export default CardList;
