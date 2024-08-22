import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: process.env.API_BASE_URL || 'https://api-socialdealer.synchsoft.in/api/v1/',
  });

  api.interceptors.request.use((config) => {
    const token = useCookie('token').value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Only provide $api if it doesn't already exist
  if (!nuxtApp.hasOwnProperty('$api')) {
    return {
      provide: {
        api: api
      }
    };
  }
});