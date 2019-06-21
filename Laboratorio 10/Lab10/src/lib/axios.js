import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://172.23.11.150:5000'
});

export default instance;
