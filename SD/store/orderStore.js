// stores/ticketStore.js
import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useNuxtApp } from '#app';

export const useOrederStore = defineStore('order', {
  state: () => ({
    // Define any state properties here if needed
  }),
  actions: {
    async fetchOrderDetailsById(orderId) {
      try {
        const { $apiClient } = useNuxtApp();
        const response = await $apiClient.get(`/get-order-details/${orderId}`);

        return response.data;
      } catch (error) {
        console.error('Failed to fetch ticket details:', error);
        throw error;
      }
    },

    async confirmOrderStatus(orderId) {
      try {
        const { $apiClient } = useNuxtApp();
        const response = await $apiClient.get(`/order-status-confirm/${orderId}`);
        return response.data;
      } catch (error) {
        console.error('Failed to fetch ticket details:', error);
        throw error;
      }
    },




   
  },
});
