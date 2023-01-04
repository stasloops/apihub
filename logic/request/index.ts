import axios from 'axios';
import { storage } from '../helpers/localStorage';

export const API_URL = 'https://spamcy.space/api/v1'
export const $request = axios.create({
    baseURL: API_URL,
})

$request.interceptors.request.use((config: any) => {
    config.headers.Authorization = storage.get('token') ? storage.get('token') : null

    return config;
})