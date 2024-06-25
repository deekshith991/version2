
import axios from 'axios';
import { useAuth } from './AuthContext';

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





// export const LLOGIN = async (user) => {

//     const { setAuthData } = useAuth;

//     try {
//         const res = await axios.post(`${api_URL}/api/Auth`, user);
//         console.log('Login successful:', res.data);
//         const entry = (res.data);
//         console.log(entry.id);
//         setAuthData({ entry });
//         return res.data;

//     } catch (error) {
//         if (error && error.response.status === 401) {
//             console.error('Unauthorized: Invalid credentials');
//             // Handle unauthorized error, e.g., show error message to user
//         } else {
//             console.error('Error occurred while logging in:', error.message);
//         }
//         throw error;
//     }
// };

export const LOGIN = async (user) => {
    try {
        const res = await axios.post(`${api_URL}/api/Auth`, user);
        console.log('Response:', res);
        return res.data;

    } catch (error) {
        console.error('Error:', error); // Log the error for debugging
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized: Invalid credentials');

        } else {
            console.error('Error occurred while logging in:', error.message);
        }
        throw error;
    }
};
