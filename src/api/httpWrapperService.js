import axios from 'axios';
import GLOBALS from '../globalVariables';

const instance = axios.create({
    baseURL: GLOBALS.BASE_URL,
    timeout: 5000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

instance.interceptors.response.use(response => {
    return response.data;
}, error => {
    alert(JSON.stringify(error));
    return Promise.reject(error);
});

export default instance;