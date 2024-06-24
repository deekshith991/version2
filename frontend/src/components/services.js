
import axios from 'axios';

const api_URL = 'http://localhost:3333';

export const test = async () => {
    return await axios.get(`${api_URL}/api/test`)
        .then(response => console.log(response))
        .catch(error => {
            console.log("unable to connect to server\nError msg\n", error);
            // alert('server is down');
        })

};

// for jwt tokens
// // Storing data in localStorage
// localStorage.setItem('myData', JSON.stringify(data));

// // Retrieving data from localStorage
// const storedData = JSON.parse(localStorage.getItem('myData'));
