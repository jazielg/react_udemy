import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-udemy-burger-4fcbe.firebaseio.com/'
});

export default instance;
