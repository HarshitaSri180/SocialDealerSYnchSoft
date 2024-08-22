<template>
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
import axios from 'axios';

export default {
  data() {
    return {
      preferences: [], // Array to store preferences
    };
  },
  created() {
    this.fetchPreferences();
  },
  methods: {
    async fetchPreferences() {
      try {
        const response = await axios.get('https://api-socialdealer.synchsoft.in/api/v1/all-preferences/0/10');
        this.preferences = response.data.data.preferences_list;
      } catch (error) {
        console.error('Error fetching preferences:', error);
      }
    },
  },
};
</script>
<style scoped>
.buttonsGetPersonl {
  display: flex;
  flex-wrap: wrap; /* Allows buttons to wrap onto multiple lines if needed */
}

.ButtonGetPersonal {
  margin: 0 10px; /* Adjust the horizontal spacing between buttons */
  padding: 10px 20px; /* Adjust the padding inside the buttons */
}
</style>
