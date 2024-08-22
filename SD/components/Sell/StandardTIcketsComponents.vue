<template>
  <Banner />
  <div class="containerSeventeen container">
   <NuxtLink to="/Sellinghub/PaperTicketsHandling"> <button class="StandardTicket">
      Standard Ticket
    </button></NuxtLink>
    <p class="howmanyTIcketsWannaSell">How many tickets would you like to sell?</p>
<div class="plusMinusButton d-flex">
  <button class="minus">-</button>
  <p class="minusText">1</p>
  <button class="plus">+</button>
  
</div>
<p class="originalpriceticket">
    Original Ticket Price
  </p>
  <p class="pricehundred">£100</p>
  <div class="sellinPrizeBelow">The selling price must be at, or below: <span class="originalTicketPriceSpan">Original Ticket Price + 20% Price Cap</span></div>
  <div class="seelingPriceCards  mx-auto">
    <p class=" additionalInfo">Selling Price</p>
    <p class="EuroHundred">£100</p>
  </div>
  <p class="rememberTickets">Remember, tickets sold closer to the original ticket price earn sellers more points!</p>
  <hr/>
  <p class="uploadTicketPdfheadding">Ticket Transfer</p>
  <p class="importantText">IMPORTANT:</p>

  <p class="sellinPrizeBelow">This event requires you to transfer your ticket on the primary ticketing application once it is sold!<br/> Be sure to read the next steps once your ticket is sold to complete your transaction and receive your funds!</p>
  <p class="sellinPrizeBelow">Be sure to read the next steps once your ticket is sold to complete your
transaction and receive your funds!</p>
  
  <div class="AdditionalInfoPara">

    <p class="additionalInfo">Additional Info</p>
    <p class="EditPara">Edit</p>
  </div>
  </div>

</template>
<script setup>
import Banner from "~/components/Events/Banner.vue";

</script>
<style>
.importantText{
  font-family: Montserrat;
font-size: 25px;
font-weight: 600;
line-height: 48.76px;
text-align: left;
color: #BC1818;

}
.EuroHundred{
  font-family: Montserrat;
font-size: 25px;
font-weight: 600;
line-height: 30.95px;
text-align: left;

}
.EditPara{
  font-family: Montserrat;
font-size: 19px;
font-weight: 600;
line-height: 27.5px;
text-align: left;
color: #E8550D;

}
.additionalInfo{
  font-family: Montserrat;
font-size: 19px;
font-weight: 400;
line-height: 40.76px;
text-align: left;

}
.rememberTickets{
  margin-bottom:34px;
  font-family: Montserrat;
font-size: 16px;
font-weight: 400;
/* line-height: 20.48px; */
text-align: center;

}
.seelingPriceCards{
  width: 50%;
    margin: 15px auto;
    border: 1px solid rgb(158, 158, 158);

    padding: 17px 22px;
    border-radius: 9px;
}
.originalTicketPriceSpan{
  font-family: Montserrat;
font-size: 19px;
font-weight: 600;
line-height: 73.88px;
text-align: left;

}
.sellinPrizeBelow{
  font-family: Montserrat;
font-size: 19px;
font-weight: 400;
line-height: 43.88px;
text-align: left;

}
.pricehundred{
  font-family: Montserrat;
font-size: 25px;
font-weight: 600;
line-height: 29.95px;
text-align: left;
color: #BC1818;

}
.originalpriceticket,.uploadTicketPdfheadding{
  font-family: Montserrat;
font-size: 25px;
font-weight: 600;
line-height: 60.95px;
text-align: left;

}
.AdditionalInfoPara{
  width: 50%;
    margin: 65px auto;
    border: 1px solid rgb(8, 8, 8);
display: flex;
height: 110px;
justify-content: space-between;
    padding: 20px 22px;
    border-radius: 9px;
}


.containerSeventeen{
  max-width: 1400px;
}
button.StandardTicket{
  
 
  border-radius: 13px;
  padding: 5px 36px;
  height: 25%;
 
  justify-content: center;
  display: flex;
  margin: 38px auto;
  gap: 0px;
  
  background-color: transparent;
  font-family: Montserrat;
  font-size: 20px;
  color: rgb(0, 0, 0);
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
 border: 1px solid grey;
 
 
 
 }
 button.plus{
  border-radius: 4px;
    font-weight: 600;
    font-size: 22px;
    border: 1px solid #000000;
    padding: 0px 11px;
 }
.minusText{
  
    font-weight: 600;
    font-size: 22px;
   
    padding: 0px 11px;
}
 button.minus {
    border-radius: 4px;
    font-weight: 600;
    font-size: 22px;
    border: 1px solid #8f8282;
    padding: 0px 11px;
}

.plusMinusButton.d-flex {
    margin: 32px 0px;
    gap: 14px;
}
 .howmanyTIcketsWannaSell{
  font-family: Montserrat;
font-size:22px;
font-weight: 500;
line-height: 27.5px;
text-align: left;

 }

 @media screen and (min-width:315px) and (max-width:765px){

  .AdditionalInfoPara{
    width: 100%;
  }

 }
</style>