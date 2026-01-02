import axios from 'axios';
import { auth } from '../services/firebase';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
    baseURL: API_URL,
});

// Interceptor to add token
api.interceptors.request.use(async (config) => {
    if (auth && auth.currentUser) {
        const token = await auth.currentUser.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const getProblems = async () => {
    const response = await api.get('/problems');
    return response.data;
};

export const getProblem = async (slug) => {
    const response = await api.get(`/problems/${slug}`);
    return response.data;
};

export const submitCode = async (data) => {
    const response = await api.post('/submissions', data);
    return response.data;
};

export const runPlayground = async (data) => {
    const response = await api.post('/submissions/run', data);
    return response.data;
};

export const getUserProfile = async () => {
    const response = await api.get('/users/profile');
    return response.data;
};
