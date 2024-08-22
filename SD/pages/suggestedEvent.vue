<template>
  <div class="container">
    <div class="SuggestedEventContainer">
      <div class="Event d-flex justify-content-between">
        <p class="SuggestedEvent">Suggested Events</p>
        <img
          class="arrow"
          src="@/assets/images/arrowinaCircle.png"
          @click="scrollCards"
        />
      </div>
      <hr />

      <ul class="cards">
        <li class="card" v-for="event in events" :key="event.id">
          <NuxtLink
    :to="{
      name: 'events-category-id',
      params: { category: formatCategoryName(event.category.category), id: event.id }
    }"
  >

            <div>
              <!-- <img class="card-img-top" :src="event.image_url" alt="Card image cap" /> -->
              <img
                class="card-img-top"
                :src="event.image_url"
                alt="Card image cap"
              />
              <div class="card-content">
                <p class="card-title lovelandFestival">
                  {{ event.event_name }}
                </p>
              </div>
              <div class="iconWithText d-flex">
                <img class="Calender" src="@/assets/images/Calendar.png" />
                <p class="card-text DateCard">
                  {{
                    formatEventDate(event.start_date_time, event.end_date_time)
                  }}
                </p>
              </div>
              <div class="iconWithText d-flex">
                <img class="Location" src="@/assets/images/Location.png" />
                <p class="card-text venue">{{ event.venue }}</p>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>

  <div class="container">
    <div class="getPersonal">
      <p class="GetPersonal">Get Personal</p>
      <p class="selectYourprefrence">
        Select your preferences to get recommendations based on what you love!
      </p>
      <div class="buttonsGetPersonl justify-content-between">
        <button
          v-for="preference in preferences"
          :key="preference.id"
          class="ButtonGetPersonal"
        >
          {{ preference.name }}
        </button>
        <button class="ButtonGetPersonal">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; 
import { formatCategoryName } from '~/utils/formatCategory'; 

export default {
  data() {
    return {
      events: [],
      preferences: [], // Array to store preferences
    };
  },
  created() {
    this.fetchPreferences();
  },
  methods: {
    scrollCards() {
      const cardList = this.$el.querySelector(".cards");
      cardList.scrollBy({ left: 300, behavior: "smooth" });
    },
    async fetchEvents() {
      try {
        const response = await axios.get(
          "https://api-socialdealer.synchsoft.in/api/v1/all-events/0/10"
        );
        if (response.data.status) {
          this.events = response.data.data.tickets;
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },

    async fetchPreferences() {
      try {
        const response = await axios.get(
          "https://api-socialdealer.synchsoft.in/api/v1/all-preferences/0/10"
        );
        this.preferences = response.data.data.preferences_list;
      } catch (error) {
        console.error("Error fetching preferences:", error);
      }
    },

    formatEventDate(startDateTime, endDateTime) {
      const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      const startDate = new Date(startDateTime).toLocaleDateString(
        undefined,
        options
      );
      const endDate = new Date(endDateTime).toLocaleDateString(
        undefined,
        options
      );
      return `${startDate} till ${endDate}`;
    },
  },
  mounted() {
    this.fetchEvents();
  },
};
</script>
