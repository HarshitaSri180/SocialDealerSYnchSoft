<template>
  <div class="container ticketsContainer">
    <div class="tickets w-50">
      <NuxtLink
    :to="{
      name: 'events-category-id',
      params: { category: formatCategoryName(event.category.category), id: event.id },
      hash: '#EventInformationIdSecond'
    }"
  
      
        ><span class="TicketsFirst">Tickets</span></NuxtLink
      >
      <NuxtLink   :to="{
      name: 'events-category-id',
      params: { category: formatCategoryName(event.category.category), id: event.id }, hash: '#regularButtonIdEventHero' }">
        <span class="EventInfo">Event Info</span>
      </NuxtLink>
      <NuxtLink   :to="{
      name: 'events-category-id',
      params: { category: formatCategoryName(event.category.category), id: event.id }, hash: '#EventInformationIdSecond' }">
        <span class="SellInfo">Sell info</span></NuxtLink
      >
    </div>
    <div class="TicketsButton d-flex">
      <div class="ticketsTyps d-flex">
        <p class="TicketsTypesAvailable">Tickets Types Available</p>
        <img class="info_circle" src="@/assets/images/Info-Circle.png" />
      </div>
      <div class="digitalButton">
        <button class="DigitalTicketsButtons">Digital Ticket</button>
      </div>
    </div>

    <hr />

    <div v-for="ticketType in ticketTypes" :key="ticketType.id" class="regukarBOxButton">
      <NuxtLink :to="{
    name: 'tickets-event-ticketTypeId',
    params: { 
      event: event.id, 
      ticketTypeId: ticketType.id 
    }
  }">
    <div class="RegularBox">
      <p class="RegularPara">{{ ticketType.ticket_type }}</p>
      <p class="bookingFee">From £{{ event.prize }} + Booking Fee</p>
    </div>
    <div class="CategoryButton align-items-center">
     

     
        <button :class="['TicketsButtonWithText', `TicketsButtonWithText${ticketType.id}`]">
          <img class="TicketsImg" src="@/assets/images/Ticket.png" />
          <span>{{ ticketType.ticket_type_count}}</span>
        </button>
    </div>
  </NuxtLink>
  </div>

    
    <div class="EventInformartion" id="EventInformationId" v-if="event">
      <NuxtLink :to="{ path: '/events', hash: '#EventInformationIdSecond' }">
        <p class="EventInformationPara">Event Information</p></NuxtLink
      >

      <hr />
      <div class="UniversityAge">
        <div class="university">
          <p class="UniversityPara">University</p>
          <p class="UniversityOfCambridge">University of Cambridge</p>
          <p class="descriptionPara">Description</p>
          <p class="DescriptionParagraph">
            {{ event.description }}
          </p>
          <div class="lastEntry">
            <p class="LastEntry">Last Entry</p>
            <p class="AgeRestriction">Age restriction</p>
          </div>
          <div class="timeAge">
            <p class="time">{{ formatLastEntry(event.end_date_time) }}</p>
            <p class="Age">{{ event.age_restriction }}</p>
          </div>
        </div>
        <div class="">
          <div class="Vdivider"></div>
        </div>
        <div class="thirdColumn">
          <p class="DateandTime">Date & Time</p>
          <p class="DateDescriptiom">
            {{ formatEventDate(event.start_date_time, event.end_date_time) }}
          </p>
          <p class="Location">Location</p>
          <p class="address">{{ event.venue }}</p>
          <p class="ViewOnmap">View on Map</p>
        </div>
      </div>
    </div>
    <div class="sellTickets" id="EventInformationIdSecond">
      <p class="SellTicketspara">Sell Tickets</p>
      <hr />
      <p class="AreYouHolding">
        Are you holding onto an extra ticket for this event? Sell it!
      </p>

  
   
        <button class="SellTicketsButton" @click="handleSellTicketsClick">Sell Tickets</button>
    

      

    </div>
  </div>
</template>
<script setup>
import { formatCategoryName } from '~/utils/formatCategory'; 
import { defineProps } from "vue";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const ticketTypes = computed(() => {
  return props.event.ticket_types || [];
});

const emits = defineEmits(['sell-tickets-click']);



const handleSellTicketsClick = () => {
  emits('sell-tickets-click');
};


const formatEventDate = (startDateTime, endDateTime) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);

  const formattedStart = startDate.toLocaleDateString("en-US", options);
  const formattedEnd = endDate.toLocaleDateString("en-US", options);

  return `${formattedStart} till ${formattedEnd}`;
};
const formatLastEntry = (lastEntryTime) => {
  if (!lastEntryTime) return "N/A";

  const date = new Date(lastEntryTime);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
</script>
<style scoped>
.Vdivider {
  width: 2px;
  height: 100%;
  background-color: #bc1818;
}
.timeAge {
  display: flex;
  justify-content: space-between;
}
.descriptionPara {
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 600;
  line-height: 39.01px;
  text-align: left;
  color: #00000066;
}
.UniversityOfCambridge,
.Age,
.time,
.DateDescriptiom,
.address,
.Location {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 48.76px;
  text-align: left;
}
.ViewOnmap {
  color: #e8550d;
  font-family: Montserrat;
  font-size: 17px;
  cursor: pointer;
  font-weight: 600;
  line-height: 39.01px;
  text-align: left;
}
.EventInformationPara {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
  margin-top: 45px;

  margin-bottom: 13px;
}
.UniversityPara,
.AgeRestriction,
.LastEntry,
.DateandTime {
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 600;
  line-height: 39.01px;
  text-align: left;
  color: #00000066;
}
.RegularPara {
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 600;
  /* line-height: 73.14px; */
  text-align: left;
}
.bookingFee {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  /* line-height: 39.01px; */
  text-align: left;
  color: #484848;
}
.SellTicketspara {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  line-height: 27.5px;
  margin-top: 45px;

  margin-bottom: 13px;
  text-align: left;
}

/* @media screen and (max-width: 1025px) {
} */
.regukarBOxButton {
  display: flex;
  margin: 38px auto;

  max-width: 50%;
  border: 1px solid black;
  border-radius: 5px;
  justify-content: space-between;
}
.DescriptionParagraph {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 48.76px;
  text-align: left;
}
.UniversityAge {
  display: flex;
  justify-content: space-between;
}
.SellTicketsButton {
  width: 25%;
  border-radius: 8px;
  padding: 19px 15px;
  height: 25%;
  justify-content: center;
  display: flex;
  margin: 45px auto;
  gap: 0px;
  background-color: #e8550d;
  font-family: Montserrat;
  font-size: 20px;
  color: white;
  font-weight: 600;
  line-height: 27.5px;
  text-align: center;
}
.AreYouHolding {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 27.5px;
  text-align: center;
}
img.TicketsImg {
  width: 18px;
  height: 16px;
}

.CategoryButton {
  display: flex;
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
  font-weight: 400;
}
.lastEntry {
  display: flex;
  justify-content: space-between;
}
.LovelandFestivalsEvent {
  font-family: "Montserrat", sans-serif;
  font-size: 65px;
  color: white;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
  position: inherit;
  top: 74%;
  left: 6%;
}

.tickets {
  /* padding: 25px; */
  display: flex;
  gap: 77px;
  margin-bottom: 50px;
}
.ticketsTyps {
  gap: 15px;
  align-items: center;
}

.regukarBOxButton {
  display: flex;
  /* margin: 0px auto; */
  max-width: 50%;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 14px 39px;
  box-shadow: 0px 0px 2px inset;
  justify-content: space-between;
}
.info_circle {
  width: 8%;
  height: 2%;
}
.TicketsButton {
  align-items: center;
  margin-top: 45px;
  margin-bottom: 13px;
  justify-content: space-between;
}
.TicketsFirst {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 58.51px;
  text-align: left;
}
.SellInfo,
.EventInfo {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 58.51px;
  text-align: left;
}
span.EventInfo:hover {
  transition: 0.5s;
  cursor: pointer;

  border-bottom: 10px solid #bc1818;
}
.SellInfo:hover {
  transition: 0.5s;
  cursor: pointer;

  border-bottom: 10px solid #bc1818;
}
.TicketsFirst:hover {
  transition: 0.5s;
  cursor: pointer;
  border-bottom: 10px solid #bc1818;
}

.TicketsTypesAvailable {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
}
.DigitalTicketsButtons {
  padding: 0px 22px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #8fcd92;
  border: 1px solid #8fcd92;
  /* margin-right: 45px; */
}
.TicketsButtonWithText {
  border: none;
  padding: 6px 15px;
  text-align: center;
  text-decoration: none;
  display: flex;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  background-color: #f6bb9e;
  gap: 4px;
  align-items: center;
}
.TicketsButtonWithTextSec {
  border: none;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  display: flex;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  background-color: #f6bb9e;
  gap: 4px;
  align-items: center;
}
.TicketsButtonWithTextThird {
  border: none;
  padding: 7px 25px;
  text-align: center;
  text-decoration: none;
  display: flex;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  background-color: #f6bb9e;
  gap: 4px;
  align-items: center;
}
.university {
  max-width: 50%;
}
@media screen and (max-width: 1200px) {
  .SellInfo,
  .EventInfo {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
  }

  .TicketsFirst {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
  }
  .tickets {
    /* padding: 25px; */
    display: flex;
    gap: 50px;
    margin-bottom: 30px;
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
  .EventDate {
    font-family: "Montserrat", sans-serif;
    line-height: 27.5px;
    text-align: left;
    position: inherit;
    top: 27% !important;
    left: 6%;
    font-size: 32px;
    color: rgb(255, 255, 255);
    font-weight: 500;
  }
  .TicketsTypesAvailable {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 600;
    line-height: 33.5px;
    text-align: left;
  }
  .regukarBOxButton {
    display: flex;
    /* margin: 0px auto; */
    box-shadow: 0px 0px 2px inset;
    max-width: 100%;
  }
  .SellTicketsButton {
    width: 100%;
  }
  .university {
    max-width: 100%;
  }
  .UniversityAge {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

@media screen and (min-width: 325px) and (max-width: 1025px) {
  .SellTicketsButton {
    width: 64% !important;
  }
  .LovelandFestivalsEvent {
    top: 31%;
    left: 6%;
  }
}

a{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.TicketsButtonWithText {
  
  height: 36px;
}
</style>
