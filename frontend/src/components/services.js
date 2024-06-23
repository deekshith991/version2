
import axios from 'axios';

const api_URL = 'http://localhost:3333';

export const test = () => {
    axios.get(`${api_URL}/api/test`)
        .then(response => console.log(response))
        .catch(error => alert('server is down'))
}