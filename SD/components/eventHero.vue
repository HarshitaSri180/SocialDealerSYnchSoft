<template>
  
  <EventTicketPage/>

  <div class="container TicketsContainer">
    <div class="tickets">
      <span class="TicketsFirst">Tickets</span>
      <span class="EventInfo">Event Info</span>
      <span class="SellInfo">Sell info</span>
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

    <div class="regukarBOxButton">
      <div class="RegularBox">
        <p class="RegularPara">Regular</p>
        <p class="bookingFee">From £10 + Booking Fee</p>
      </div>
      <div class="CategoryButton">
        <NuxtLink to="/eventsInnerPages"> <button class="TicketsButtonWithText">
          <img class="TicketsImg" src="@/assets/images/Ticket.png" /><span
            >241</span
          > 
        </button></NuxtLink>
    
      </div>
    </div>
    <!-- second card -->
    <div class="regukarBOxButton">
      <div class="RegularBox">
        <p class="RegularPara">Standard</p>
        <p class="bookingFee">From £10 + Booking Fee</p>
      </div>
      <div class="CategoryButton">
        <button class="TicketsButtonWithText">
          <img class="TicketsImg" src="@/assets/images/Ticket.png" /><span
            >241</span
          >
        </button>
      </div>
    </div>
    <!-- third card -->
    <div class="regukarBOxButton">
      <div class="RegularBox">
        <p class="RegularPara">Premium</p>
        <p class="bookingFee">From £10 + Booking Fee</p>
      </div>
      <div class="CategoryButton">
        <button class="TicketsButtonWithText">
          <img class="TicketsImg" src="@/assets/images/Ticket.png" /><span
            >241</span
          >
        </button>
      </div>
    </div>
    <div class="EventInformartion">
      <p class="EventInformationPara">Event Information</p>

      <hr />
      <div class="UniversityAge">
        <div class="university">
          <p class="UniversityPara">University</p>
          <p class="UniversityOfCambridge">University of Cambridge</p>
          <p class="descriptionPara">Description</p>
          <p class="DescriptionParagraph">
            Loveland turns 25 and it will be a celebration that you will never,
            ever forget. The beautiful Sloterpark, a line-up of the best house &
            techno acts, interactive entertainment.
          </p>
          <div class="lastEntry">
            <p class="LastEntry">Last Entry</p>
            <p class="AgeRestriction">Age restriction</p>
          </div>
          <div class="timeAge">
            <p class="time">11PM</p>
            <p class="Age">18+</p>
          </div>
        </div>
        <div class="">
          <div class="vertical-divider"></div>
        </div>
        <div class="thirdColumn">
          <p class="DateandTime">Date & Time</p>
          <p class="DateDescriptiom">
            Fri 22 Jul 2022, 15:00 till Sat 23 Jul 2022, 23:00
          </p>
          <p class="Location">Location</p>
          <p class="address">4166 24th St San Francisco CA 94114</p>

          <p class="ViewOnmap">View on Map</p>
        </div>
      </div>
    </div>
    <div class="sellTickets">
      <p class="SellTicketspara">Sell Tickets</p>
      <hr />
      <p class="AreYouHolding">
        Are you holding onto an extra ticket for this event? Sell it!
      </p>
      <button class="SellTicketsButton">Sell Tickets</button>
    </div>
  </div>
</template>
<script setup>
import EventTicketPage from '~/components/EventTicketPage.vue';

</script>
<style scoped>
.EventMAinPageHEro {
  margin-top: 2px;
  background-image: url("@/assets/images/FlamingoBgImg.png");
  background-position: center center;
  background-repeat: no-repeat;
  filter: grayscale(70%);
  background-size: cover;
  width: 100%;
  height: 600px; /* Adjust as needed */
  position: relative;
}
.timeAge {
  display: flex;
  justify-content: space-between;
}
.descriptionPara {
  font-family: Montserrat;
  font-size: 20px;
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
  font-size: 20px;
  font-weight: 400;
  line-height: 48.76px;
  text-align: left;
}
.ViewOnmap {
  color: #e8550d;
  font-family: Montserrat;
  font-size: 20px;
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

  margin-bottom: 30px;
}
.UniversityPara,
.AgeRestriction,
.LastEntry,
.DateandTime {
  font-family: Montserrat;
  font-size: 20px;
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
  font-size: 20px;
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

  margin-bottom: 30px;
  text-align: left;
}

/* @media screen and (max-width: 1025px) {
} */
.regukarBOxButton{
  display: flex;
  margin: 38px auto;

  max-width: 50%;
  border: 1px solid black;
  border-radius: 5px;
  justify-content: space-between;
}
.DescriptionParagraph {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 48.76px;
  text-align: left;
}
.UniversityAge {
  display: flex;
  justify-content: space-between;
}
.SellTicketsButton {
  width: 21%;
  border-radius: 8px;
  padding: 19px 15px;
  height: 25%;
  justify-content: center;
  display: flex;
  margin: 45px auto;
  gap: 0px;
  opacity: 0px;
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
  width: 20px;
  height: 18px;
}
.EventMAinPageHEro::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    159,
    148,
    148,
    0.2
  ); /* Adjust the color and opacity as needed */
  z-index: 1;
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
.LovelandFestivalsEvent{
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
.TicketsContainer {
  max-width: 1400px;
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

.regukarBOxButton{
  display: flex;
  /* margin: 0px auto; */
  max-width: 50%;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 14px 39px;
  justify-content: space-between;
}
.info_circle {
  width: 8%;
  height: 2%;
}
.TicketsButton {
  align-items: center;
  margin-top: 45px;

  margin-bottom: 30px;
  /* margin-left: 33px; */
  justify-content: space-between;
}
.TicketsFirst{
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 58.51px;
  text-align: left;
  cursor: pointer;
  border-bottom: 10px solid red;
}
.SellInfo,
.EventInfo {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 58.51px;
  text-align: left;
}
.TicketsFirst:hover {
  cursor: pointer;
  border-bottom: 10px solid red;
}

.TicketsTypesAvailable {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
}
.DigitalTicketsButtons {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  color: #8fcd92;
  border: 1px solid #8fcd92;
  margin-right: 45px;
}
.TicketsButtonWithText {
  width: 100%;
  height: 60%;
  padding: 5px 10px;
  background-color: #f6bb9e;
  border-radius: 17%;
  display: flex;
  align-items: center;
}
.university {
  max-width: 50%;
}
@media screen and (max-width: 1200px) {

  .SellInfo,
  .EventInfo{
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
  }
  .TicketsFirst{
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
  }
  .tickets {
    /* padding: 25px; */
    display: flex;
    gap: 50px;
    margin-bottom: 30px;
  }
  .LovelandFestivalsEvent{
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
    max-width: 100%;
  }
  .SellTicketsButton{
    width: 100%;
  }
  .university{
    max-width: 100%;
  }
  .UniversityAge{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

@media screen and (min-width: 325px) and (max-width: 1025px) {

  .SellTicketsButton{
    width: 64% !important;
   
  }
    .LovelandFestivalsEvent{
 
  
    top: 31%;
    left: 6%;
}

} 
</style>