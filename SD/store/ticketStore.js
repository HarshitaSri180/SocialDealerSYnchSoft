// stores/ticketStore.js
import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useNuxtApp } from '#app';

export const useTicketStore = defineStore('ticket', {
  state: () => ({
    // Define any state properties here if needed
  }),
  actions: {
    async fetchEventsDetails(eventId){
      try {
        const { $apiClient } = useNuxtApp();
        const response = await $apiClient.get(`/event-detail/${eventId}`);

        return response.data;
      } catch (error) {
        console.error('Failed to fetch event details:', error);
        throw error;
      } 

    },
    async addTicket(ticketData) {
      try {
        const { $apiClient } = useNuxtApp();
        const cookies = useCookies();
        const token = cookies.get('token');

        if (!token) {
          throw new Error('User is not authenticated.');
        }

        const response = await $apiClient.post('/add-ticket', ticketData, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        return response.data;
      } catch (error) {
        console.error('Failed to add ticket:', error);
        throw error;
      }
    },

    async fetchEventTicketsTypeDetails(eventId, ticketTypeId) {
      try {
        const { $apiClient } = useNuxtApp();
        const response = await $apiClient.get(`/event-tickets/${eventId}/${ticketTypeId}`);

        return response.data;
      } catch (error) {
        console.error('Failed to fetch ticket details:', error);
        throw error;
      }
    },


    async fetchEventTickets(eventId, ticketId) {
      try {
        const { $apiClient } = useNuxtApp();
        const response = await $apiClient.get(`/event-tickets-details/${eventId}/${ticketId}`);

        return response.data;
      } catch (error) {
        console.error('Failed to fetch ticket details:', error);
        throw error;
      }
    },
  },
});
