import axios from 'axios';

const baseUrl = 'https://api.thecatapi.com/v1/';
const apiKey = '6c692e35-e64b-4c25-aff6-17f93e499395';

export const jsonClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    },
    baseURL: baseUrl
});

export const formClient = axios.create({
    headers: {
        'Content-Type': 'multipart/form-data',
        'x-api-key': apiKey
    },
    baseURL: baseUrl
});
