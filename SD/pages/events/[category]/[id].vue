<template>
  <CommonInnerNav />
  <EventsBanner v-if="event" :event="event" />
  <EventsMain v-if="event && !showHubTicketType && !showUploadTicket" :event="event" @sell-tickets-click="handleSellTicketsClick" />
  <SellTicketType v-if="event && showHubTicketType" :event="event" @continue="handleContinue" />
  <SellUploadTicket v-if="event && showUploadTicket" :event="event" :selectedData="selectedData" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTicketStore } from '@/store/ticketStore';

const event = ref(null);
const showHubTicketType = ref(false);
const showUploadTicket = ref(false);
const selectedData = ref(null);

const route = useRoute();
const ticketStore = useTicketStore(); // Initialize your Pinia store

const fetchEvent = async () => {
  try {
    // Use the store action to fetch event details
    const eventDetails = await ticketStore.fetchEventsDetails(route.params.id);
    console.log('Event details:', eventDetails);
    if (eventDetails) {
      event.value = eventDetails.data.eventDetails;
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
  }
};

const handleSellTicketsClick = () => {
  showHubTicketType.value = true;
};

const handleContinue = (data) => {
  selectedData.value = data;
  showHubTicketType.value = false;
  showUploadTicket.value = true;
};

onMounted(() => {
  fetchEvent();
});
</script>
