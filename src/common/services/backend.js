import axios from 'axios';
import { apiUrl } from '../helpers/variables';

export const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});