import axios from 'axios';
import GLOBALS from '../globalVariables';

const instance = axios.create({
    baseURL: GLOBALS.BASE_URL,
    timeout: 3000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default instance;