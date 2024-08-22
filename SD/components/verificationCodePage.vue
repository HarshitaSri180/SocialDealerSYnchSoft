<template>
   <EventTicketPage/>
    <div class="container VerificationCodeContaine">
      <div class="buttonSellerInfo">
      <button class="orderId">
        #ORD123
      </button></div>
      <button class="ViewNextStepButton">View next steps to receive your Digital Ticket</button>
      <!-- verification code -->
      <div class="card verificationCard d-flex mx-auto" style="width: 26rem;">
  <div class="card-body">
    <p class="card-title verificationCodeForTitle" >Verification Code For Your Purchase</p>
    <p class="text-center CodeVerification">456748</p>
   
  </div>
 
</div>
            <!-- verification code -->
            <SellerInfoRatingComponent/>
  <PriceDetailComponent/>
      </div>
</template>
<script setup>
import EventTicketPage from '~/components/EventTicketPage.vue';
import SellerInfoRatingComponent from '~/components/SellerInfoRatingComponent.vue';
import PriceDetailComponent from '~/components/PriceDetailComponent.vue';
</script>
<style scoped>
.verificationCard{
  box-shadow: none;
  border:1px solid grey;
  margin-bottom: 73px;

}
.VerificationCodeContaine{
  max-width: 1400px;
}
.verificationCodeForTitle {
    text-align: center;
    font-family: Montserrat;
font-size: 18px;
font-weight: 600;
line-height: 52.36px;
text-align: left;

}
p.text-center.CodeVerification {
  font-family: Montserrat;
font-size: 35px;
font-weight: 700;
line-height: 19.81px;
text-align: left;
color:#BC1818;
;

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
  font-size: 21px;
  color: rgb(0, 0, 0);
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
 border: 1px solid grey;
 
 
 
 }
 button.ViewNextStepButton {
  
  
  border-radius: 17px;
  padding: 12px 15px;
  height: 25%;
  
  justify-content: center;
  display: flex;
  margin: 38px auto;
 
  opacity: 0px;
  background-color: #e8550d;
  font-family: Montserrat;
  font-size: 21px;
  color: white;
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
 }
</style>