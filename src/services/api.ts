import axios from 'axios';

const userToken = localStorage.getItem('authenticatedUser');

const axiosInstance = axios.create({
    baseURL: import.meta.env.API_URL,
    headers: {
        Authorization: `Bearer ${userToken}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
