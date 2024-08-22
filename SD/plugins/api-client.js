import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const apiClient = axios.create({
    baseURL: process.env.API_BASE_URL || 'https://api-socialdealer.synchsoft.in/api/v1/',
  });

  apiClient.interceptors.request.use((config) => {
    const token = useCookie('token').value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return {
    provide: {
      apiClient: apiClient
    }
  };
});