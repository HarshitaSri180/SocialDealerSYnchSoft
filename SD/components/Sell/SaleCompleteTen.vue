<template>
  <EventTicketPage/>
    <div class="container ConfirmTicketsTicketsContaine">
      <div class="buttonSellerInfo">
        <NuxtLink to="/Sellinghub/ScreenSixtyOne"> <button class="orderId">
        #ORD123
      </button></NuxtLink></div>
      <div class="confirmedtext">
        <p class="ConfirmedPara">Sale Complete!</p>
       
      </div>
      <PriceDetailComponent/>
      <p class="BuyerInfo">Buyer Information </p>
      <SellerInfoRatingComponent/>
      </div>
</template>
<script setup>
import PriceDetailComponent from '~/components/PriceDetailComponent.vue';
import SellerInfoRatingComponent from '~/components/SellerInfoRatingComponent.vue';
</script>
<style >
.sellerInfoHeadig[data-v-0a1d0b31] {
  display: none;
}
.ConfirmedPara{
  font-family: Montserrat;
font-size: 32px;
font-weight: 600;
line-height: 27.5px;
text-align: center;
color: #BC1818;
margin-bottom:23px;
;
}
.BuyerInfo{
  font-family: Montserrat;
    font-size: 30px;
    font-weight: 600;
    line-height: 27.5px;
    text-align: left;
    margin-bottom: 13px;
}
button.orderId{
  
 
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
 .ConfirmTicketsTicketsContaine{
  max-width: 1400px;
 }
</style>