<template>
  <div class="EventMAinPageHEro">
    <p class="EventDate">22 July 2022 /&lt;Venue&gt;</p>
    <p class="LovelandFestivalsEvent">Loveland Festival 2022 | 25YRS</p>
  </div>
</template>
<script></script>
<style scoped>
/* eventTickets Page styling starts here */
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
@media screen and (max-width:1200px) {
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
.LovelandFestivalsEvent{
   
   font-size: 32px;
 }
}
/* eventTickets Page styling ends here */

</style>