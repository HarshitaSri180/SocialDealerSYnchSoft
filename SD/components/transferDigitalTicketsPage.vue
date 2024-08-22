<template>
  <EventTicketPage/>
    <div class="container TranssferDigitalTicketsContaine">
      <div class="buttonSellerInfo">
      <button class="orderId">
        #ORD123
      </button></div>
      <button class="ViewNextStepButton">View next steps to transfer your Digital Ticket</button>
      <SellerInfoRatingComponent/>
      <div class="confirmationSteps">
        <p class="ConfirmtionStepPara">Confirmation Steps</p>
        <div class="OneImageCircular d-flex">
          <img  class="FirstCIrcleImage" src="@/assets/images/oneInaCircle.png">
          

        
        <div class="paraConfirmationStepTwo">
          <p class="DescriptionConfirmationStepTwo">Once you have received an email confirmation that the buyer has accepted the ticket, forward us this confirmation at: xxxx@xxxx.com. </p>
          <p class="DescriptionConfirmationStepTwo">Once you have received an email confirmation that the buyer has accepted the ticket, forward us this confirmation at: xxxx@xxxx.com. </p>
        </div>
      </div>
      <div class="TwoImageCircular d-flex">
          <img class="FirstCIrcleImage" src="@/assets/images/twoInaCircle.png">
          

        
        <div class="paraConfirmationSteptwo">
          <p class="DescriptionConfirmationStepTwo">Once you have received an email confirmation that the buyer has accepted the ticket, forward us this confirmation at: xxxx@xxxx.com. </p>
        
        </div>
      </div>
      <div class="confirmButton">
        <NuxtLink to="/LayoutSeventyOneconfirmedTicketsScreen">  <button class="ConfirmButton">Confirm</button></NuxtLink>
      </div>
      
      </div>
  </div>
</template>
<script>
import EventTicketPage from '~/components/EventTicketPage.vue';
import SellerInfoRatingComponent from '~/components/SellerInfoRatingComponent.vue';

</script>
<style scoped>
.TranssferDigitalTicketsContaine{
  max-width: 1400px;
}
.ConfirmButton{
  
  border-radius: 17px;
  padding: 12px 55px;
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
.ConfirmtionStepPara{
  font-family: Montserrat;
font-size: 30px;
font-weight: 600;
line-height: 52.5px;
text-align: left;
color: #BC1818;
;
}
.OneImageCircular.d-flex,.TwoImageCircular{
    gap: 22px;
    margin-bottom: 35px;
    margin-top: 35px;
}
img.FirstCIrcleImage {
    width: 63px;
    height: 66px;
}
.DescriptionConfirmationStepTwo{
  font-family: Montserrat;
font-size: 20px;
font-weight: 400;
line-height: 35.41px;
text-align: left;

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