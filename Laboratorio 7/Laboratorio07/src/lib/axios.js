import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.188.1:5000'
});

export default instance;