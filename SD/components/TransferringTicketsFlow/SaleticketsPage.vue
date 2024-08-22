<template>
  <!-- <EventTicketPage/> -->
    <div class="container ConfirmTicketsTicketsContaine">
      <div class="buttonSellerInfo">
        <NuxtLink to="/TransferringTicketsFlowPage/saleTicketsScreen"> <button class="orderId">
        #ORD123
      </button></NuxtLink></div>
      <div class="confirmedtext">
        <p class="ConfirmedPara">Sale Complete!</p>
        <p class="ConfirmedDescription">You will receive your funds within 24-48 hours!</p>
      </div>
      <PriceDetailComponent/>
      <SellerInfoRatingComponent/>
      </div>
</template>
<script setup>


import PriceDetailComponent from '~/components/PriceDetailComponent.vue';
import SellerInfoRatingComponent from '~/components/SellerInfoRatingComponent.vue';
</script>
<style scoped>
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
.ConfirmedDescription{
  font-family: Montserrat;
font-size: 20px;
font-weight: 400;
line-height: 52.41px;
text-align: center;

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