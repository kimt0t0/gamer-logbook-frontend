import axios from 'axios';

const userToken = localStorage.getItem('authenticatedUser');
const apiUrl: string = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
