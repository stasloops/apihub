import axios from 'axios';
import Cookies from 'js-cookie';

export const API_URL = 'https://api.spamcy.space/api/v1'

export const $request = axios.create({
    baseURL: API_URL,
})

// $request.interceptors.request.use((config: any) => {
//     config.headers.Authorization =  Cookies.get('token') ? Cookies.get('token') : ''

//     return config;
// })