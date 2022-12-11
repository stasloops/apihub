import axios from 'axios';

export const API_URL = 'https://api.spamcy.space/api/v1'

// axios.defaults.withCredentials = true
export const $request = axios.create({
    baseURL: API_URL,
})