
import axios from 'axios';

const api_URL = 'http://localhost:3333';

export const test = async () => {
    return await axios.get(`${api_URL}/api/test`)
        .then(response => console.log(response))
        .catch(error => {
            console.log("Error msg\n", error);
            alert('server is down');
        })

};

// for jwt tokens
