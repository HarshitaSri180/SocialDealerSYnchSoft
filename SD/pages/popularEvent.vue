<template>
  <div class="container">
    <div class="popularEventContainer">
      <div class="Event d-flex justify-content-between">
        <p class="SuggestedEvent">Popular Events</p>
        <img
          class="arrow"
          src="@/assets/images/arrowinaCircle.png"
          @click="scrollCards"
        />
      </div>
      <hr />
      <ul class="cards">
        <li class="card" v-for="event in events" :key="event.id">
          <div>
            <!-- <img class="card-img-top" :src="event.image_url" alt="Card image cap" /> -->
            <img
              class="card-img-top"
              src="@/assets/images/CardTopImage.png"
              alt="Card image cap"
            />
            <div class="card-content">
              <p class="card-title lovelandFestival">{{ event.event_name }}</p>
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
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      events: [],
    };
  },
  methods: {
    scrollCards() {
      const cardList = this.$el.querySelector(".cards");
      cardList.scrollBy({ left: 300, behavior: "smooth" });
    },
    async fetchEvents() {
      try {
        const response = await fetch(
          "https://api-socialdealer.synchsoft.in/api/v1/all-events/0/10"
        );
        const data = await response.json();
        if (data.status) {
          this.events = data.data.tickets;
        }
      } catch (error) {
        console.error("Error fetching events:", error);
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
