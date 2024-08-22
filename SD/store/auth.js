import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useNuxtApp } from '#app';
import { useCookieManager } from '~/composables/useCookieManager';

export const useAuthStore = defineStore('auth', {
    state: () => ({
      user: null,
    }),
    actions: {
      async register(formData) {
        try {
          const { $apiClient } = useNuxtApp();
          const response = await $apiClient.post('/signup', formData);
          
          if (response.data.status && response.data.data.user) {
            this.user = response.data.data.user;

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(this.user));
            
            return this.user;
          } else {
            throw new Error('Registration failed: Invalid response format');
          }
        } catch (error) {
          console.error('Registration failed:', error);
          throw error;
        }
      },
      async userNameCheck(username) {
        try {
          const { $apiClient } = useNuxtApp();
          const response = await $apiClient.post('/check-username', username);
          return response;
        } catch (error) {
          console.error('Username check failed:', error);
          throw error;
        }
      },
      async setPassword(passwordData) {
        try {
          const { $apiClient } = useNuxtApp();
          const response = await $apiClient.post('/set-username-password', passwordData);
          return response;
        } catch (error) {
          console.error('Set password failed:', error);
          throw error;
        }
      },

      async verifyOtp(otpData) {
        try {
          const { $apiClient } = useNuxtApp();
          const response = await $apiClient.post('/otp-varification', otpData);
          return response;
        } catch (error) {
          console.error('OTP verification failed:', error);
          throw error;
        }
      },
    async login({ emailOrusername, password }) {
  try {
    const { $apiClient } = useNuxtApp();
    const response = await $apiClient.post('/login', {
      emailOrusername,
      password
    });
    if (response.data.status && response.data.data.payload) {
      const { user, access_token } = response.data.data.payload;
      this.user = user;
      this.token = access_token;

      const { setAuthCookie } = useCookieManager();
      setAuthCookie(access_token, user);

      return {
        user,
        token: access_token
      };
    } else {
      throw new Error(response.data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
},    
    logout() {
      this.user = null;
      this.token = null;
      const cookies = useCookies();
      cookies.remove('token');
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
  },
});
