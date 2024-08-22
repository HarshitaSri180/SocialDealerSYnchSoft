<template>
  <div v-if="event" class="EventMAinPageHEro">
  <p class="EventDate fw-400">{{ formattedDate }} </p>
    <p class="LovelandFestivalsEvent fw-bolder text-left">
      {{ event.event_name }} | {{ event.age_restriction }}YRS
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const formatEventDate = (startDateTime, endDateTime) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const startDate = new Date(startDateTime).toLocaleDateString(undefined, options);
  const venue = props.event.venue || 'Venue not specified';
  return `${startDate} / ${venue}`;
};

const formattedDate = computed(() => {
  if (props.event && props.event.start_date_time && props.event.end_date_time) {
    return formatEventDate(props.event.start_date_time, props.event.end_date_time);
  }
  return 'Date not available';
});
</script>


<style scoped>
/* eventTickets Page styling starts here */
.EventMAinPageHEro {
  margin-top: 2px;
  background-image: url("@/assets/images/FlamingoBgImg.png");
  background-position: center center;
  background-repeat: no-repeat;

  background-size: cover;
  width: 100%;
  height: 600px; /* Adjust as needed */
  position: relative;
}

.LovelandFestivalsEvent {
  font-family: "Montserrat", sans-serif;
  font-size: 65px;
  color: white;
  line-height: 27.5px;
  position: inherit;
  top: 74%;
  left: 6%;
}
.EventDate {
  font-family: "Montserrat", sans-serif;

  line-height: 27.5px;
  text-align: left;
  position: inherit;
  top: 65%;
  left: 6%;
  font-size: 32px;
  color: white;
}
@media screen and (max-width: 1200px) {
  .EventDate {
    font-family: "Montserrat", sans-serif;
    line-height: 27.5px;
    text-align: left;
    position: inherit;
    top: 27%;
    left: 6%;
    font-size: 32px;
    color: rgb(255, 255, 255);
    font-weight: 500;
  }
  .LovelandFestivalsEvent {
    font-size: 65px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    line-height: 57.5px;
    text-align: left;
    position: inherit;
    top: 30%;
    left: 6%;
  }
  .LovelandFestivalsEvent {
    font-size: 32px;
  }
}
/* eventTickets Page styling ends here */
</style>
