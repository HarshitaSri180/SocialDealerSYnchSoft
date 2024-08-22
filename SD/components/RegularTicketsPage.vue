<template>
    <div class="container TicketsContainer">

  <div class="TicketsButton d-flex">
      <div class="ticketsTyps d-flex">
        <p class="TicketsTypesAvailable">Regular Tickets(9)</p>
        <!-- <img class="info_circle" src="@/assets/images/Info-Circle.png" /> -->
      </div>
      <div class="digitalButton">
      
<div class="dropdown">
  <button>  <img class="SwapButton" src="@/assets/images/swap.png" /></button>
  <div class="dropdown-content">
  <p>Listing price (Low  to High!)</p>
  <p>Hello World!</p>
  <p>Hello World!</p>
  </div>
</div>
         <!-- <img class="SwapButton" src="@/assets/images/swap.png" /> -->
      
       
        <!-- <button class="DigitalTicketsButtons">Digital Ticket</button> -->
      </div>
    </div>
    <hr/>
    <!-- first card -->
    <div class="regukarBOxButton">
   
   <div class="RegularBox d-flex">
     <div class="circularImage">
     <img  class="WomenImage" src="@/assets/images/CircularImageWomen.png"></div>
     <div class="paraRegular">
      <NuxtLink to="/confirmTicketScreenComponent"> <p class="RegularPara">2 Tickets</p></NuxtLink>
     <span class="bookingFee"><img class="StarImage" src="@/assets/images/star.png">5.0|Super Seller</span></div>
   </div>
   <div class="CategoryButton">
     <!-- <button class="TicketsButtonWithText"> -->
     <span class="PriceRating">£9.35</span
       >
     <!-- </button> -->
   </div>
 </div>
   <!-- second card -->
   <div class="regukarBOxButton">
   
      <div class="RegularBox d-flex">
        <div class="circularImage">
        <img  class="WomenImage" src="@/assets/images/CircularImageWomen.png"></div>
        <div class="paraRegular">
        <p class="RegularPara">2 Tickets</p>
        <span class="bookingFee"><img class="StarImage" src="@/assets/images/star.png">5.0|Super Seller</span></div>
      </div>
      <div class="CategoryButton">
        <!-- <button class="TicketsButtonWithText"> -->
        <span class="PriceRating">£9.35</span
          >
        <!-- </button> -->
      </div>
    </div>
    <!-- thirdcard -->
    <div class="regukarBOxButton">
   
   <div class="RegularBox d-flex">
     <div class="circularImage">
     <img  class="WomenImage" src="@/assets/images/CircularImageWomen.png"></div>
     <div class="paraRegular">
     <p class="RegularPara">2 Tickets</p>
     <span class="bookingFee"><img class="StarImage" src="@/assets/images/star.png">5.0|Super Seller</span></div>
   </div>
   <div class="CategoryButton">
     <!-- <button class="TicketsButtonWithText"> -->
     <span class="PriceRating">£9.35</span
       >
     <!-- </button> -->
   </div>
 </div>
        <!-- thirdcard -->

    <!-- third card -->
    <div class="regukarBOxButton">
   
   <div class="RegularBox d-flex">
     <div class="circularImage">
     <img  class="WomenImage" src="@/assets/images/CircularImageWomen.png"></div>
     <div class="paraRegular">
   <p class="RegularPara">2 Tickets</p>
     <span class="bookingFee"><img class="StarImage" src="@/assets/images/star.png">5.0|Super Seller</span></div>
   </div>
   <div class="CategoryButton">
     <!-- <button class="TicketsButtonWithText"> -->
     <span class="PriceRating">£9.35</span
       >
     <!-- </button> -->
   </div>
 </div>     <button class="SellTicketsButton">Get notifications for any new tickets added!</button>

    </div></template>
<script>
</script>
<style scoped>

.RegularBox{
  align-items: center;
}
.PriceRating{
  font-family: Montserrat;
font-size: 20px;
font-weight: 600;
line-height: 58.51px;
text-align: left;

}
/* dropdown css starts here */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  right:23px;
  position: absolute;
  background-color: #ECE9E4;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
/* dropdown css ends here  */
.SellTicketsButton {
 
  border-radius: 17px;
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
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
}
.SwapButton {
    height: 26px;
}
.circularImage {
    height: auto;
 
    width: 80px;
}
img.StarImage {
    height: 18px;
    width: 18px;
}
.paraRegular {
    margin-left: 6px;
}
span.bookingFee {
    display: flex;
    gap: 5px;
    color:#E8550D;
    font-family: Montserrat;
font-size: 20px;
align-items: center;
font-weight: 500;
line-height: 39.01px;
text-align: left;

}
.regukarBOxButton{
  display: flex;
  margin: 38px auto;
  align-items: center;
  padding: 11px 17px;
  max-width: 50%;
  border: 1px solid black;
  border-radius: 5px;
  justify-content: space-between;
}
.CategoryButton {
  display: flex;
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
.TicketsButton {
  align-items: center;
  margin-top: 45px;

  margin-bottom: 30px;
  /* margin-left: 33px; */
  justify-content: space-between;
}
.DigitalTicketsButtons {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  /* line-height: 29.26px; */
  text-align: left;
  color: #8fcd92;
  border: 1px solid #8fcd92;
  margin-right: 45px;
}
img.TicketsImg {
  width: 20px;
  height: 18px;
}

.ticketsTyps {
  gap: 15px;
  align-items: center;
}
.TicketsTypesAvailable {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
}
.info_circle {
  width: 8%;
  height: 2%;
}
.RegularPara {
  font-family: Montserrat;
font-size: 32px;
font-weight: 600;
line-height: 35.14px;
text-align: left;

}
@media screen and (max-width: 1200px) {

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
  .SellTicketsButton {
    width: 100%;
  }
}
</style>
